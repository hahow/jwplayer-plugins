import { TRASH_ICON } from "./constants";
import type { trackNotesPluginConfig, TrackNoteType } from ".";
import { JWPlayer } from "./type";

export class TrackNote {
  player: JWPlayer;
  config: trackNotesPluginConfig;
  div: HTMLElement;

  constructor(
    playerInstance: JWPlayer,
    pluginConfig: trackNotesPluginConfig,
    pluginDiv: HTMLElement
  ) {
    this.player = playerInstance;
    this.config = pluginConfig;
    this.div = pluginDiv;
  }

  addTrackNote() {
    this.player.pause();

    const time = Math.round(this.player.getPosition());

    this.config.onTrackNoteCreate(time);
  }

  completeAddTrackNote(trackNote: TrackNoteType) {
    this.generateTrackNoteDOM(trackNote);
  }

  generateTrackNoteDOM(trackNote: TrackNoteType) {
    const trackNoteContainer = document.createElement("div");
    trackNoteContainer.setAttribute("class", "jw-track-note");

    const contentContainer = document.createElement("div");
    contentContainer.setAttribute(
      "class",
      "jw-track-note__content-container jw-track-note__content-container--edit"
    );

    trackNoteContainer.appendChild(contentContainer);

    const contentTextArea = document.createElement("textarea");
    contentTextArea.setAttribute("class", "jw-track-note__content-textarea");
    contentTextArea.setAttribute("placeholder", "新增筆記 (限 50 字)");
    contentTextArea.setAttribute("maxLength", "50");
    contentTextArea.setAttribute("rows", "1");

    contentContainer.appendChild(contentTextArea);

    const trashIconWrapper = document.createElement("span");
    trashIconWrapper.setAttribute("class", "jw-track-note__trash-icon-wrapper");
    trashIconWrapper.innerHTML = TRASH_ICON;
    contentContainer.appendChild(trashIconWrapper);

    setTimeout(() => {
      contentTextArea.focus();
    }, 50);

    contentTextArea.addEventListener("keydown", (e) => {
      e.stopPropagation();

      if (e.key === "Enter") {
        trackNote.note = contentTextArea.value;

        this.player.addCues([
          {
            begin: trackNote.time,
            text: trackNote.note,
            cueType: "trackNote",
          },
        ]);

        this.config.onTrackNoteUpdate(trackNote);

        trackNoteContainer.setAttribute("hidden", "true");

        this.player.play();

        e.preventDefault();
      }
    });

    contentTextArea.addEventListener("keyup", (e) => {
      e.preventDefault();

      if (e.key === "Escape") {
        trackNoteContainer.setAttribute("hidden", "true");
        this.player.play();
      }
    });

    const time = this.player.getPosition();
    const duration = this.player.getDuration();
    const percent = (time / duration) * 100 || 0;

    this.div.style.left = `calc(${percent}%)`;
    this.div.appendChild(trackNoteContainer);
  }
}
