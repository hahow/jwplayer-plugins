import { type JWPlayerType, JWPlayerPlugin } from "jwplayer-core";

import { CONTROL_ICON, TRASH_ICON } from "./constants";
import { generateStyle } from "./style";

type TrackNoteType = {
  note: string;
  time: number;
};

interface trackNotesPluginConfig {
  trackNotes: TrackNoteType[];
  onTrackNoteCreate?: (time: number) => void;
  onTrackNoteUpdate?: (trackNote: TrackNoteType) => void;
}

export class TrackNotesPlugin extends JWPlayerPlugin<trackNotesPluginConfig> {
  static readonly pluginName = "trackNotes";
  static readonly playerMinimumVersion = "8.14.0";

  constructor(
    playerInstance: JWPlayerType,
    pluginConfig: trackNotesPluginConfig,
    pluginDiv: HTMLElement
  ) {
    super(playerInstance, pluginConfig, pluginDiv);

    generateStyle();

    playerInstance.on("ready", () => {
      const cues = pluginConfig.trackNotes.map(({ note, time }) => ({
        begin: time,
        cueType: "trackNote",
        text: note,
      }));
      playerInstance.addCues(cues);

      playerInstance.addButton(
        CONTROL_ICON,
        "筆記標註",
        () => {
          this.#addTrackNote();
        },
        "jw-plugin-track-notes"
      );
    });
  }

  #addTrackNote() {
    this.playerInstance.pause();

    const time = Math.round(this.playerInstance.getPosition());

    this.pluginConfig.onTrackNoteCreate?.(time);
  }

  /**
   * @experimental Demo 用，`1.0.0` 之後可能會移除
   */
  completeAddTrackNote(time: number) {
    this.#generateTrackNoteDOM(time);
  }

  #generateTrackNoteDOM(time: number) {
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
        const trackNote = {
          note: contentTextArea.value,
          time,
        };

        this.playerInstance.addCues([
          {
            begin: trackNote.time,
            text: trackNote.note,
            cueType: "trackNote",
          },
        ]);

        this.pluginConfig.onTrackNoteUpdate?.(trackNote);

        trackNoteContainer.setAttribute("hidden", "true");

        this.playerInstance.play();

        e.preventDefault();
      }
    });

    contentTextArea.addEventListener("keyup", (e) => {
      e.preventDefault();

      if (e.key === "Escape") {
        trackNoteContainer.setAttribute("hidden", "true");
        this.playerInstance.play();
      }
    });

    const currentTime = this.playerInstance.getPosition();
    const duration = this.playerInstance.getDuration();
    const percent = (currentTime / duration) * 100 || 0;

    this.pluginDiv.style.left = `calc(${percent}%)`;
    this.pluginDiv.appendChild(trackNoteContainer);
  }
}
