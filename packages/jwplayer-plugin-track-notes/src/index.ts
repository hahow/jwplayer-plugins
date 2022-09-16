import { TrackNote } from "./class";
import { CONTROL_ICON } from "./constants";
import { type JWPlayerType, JWPlayerPlugin } from "jwplayer-core";

import { generateStyle } from "./style";

export type TrackNoteType = {
  note: string;
  time: number;
};

export interface trackNotesPluginConfig {
  trackNotes: TrackNoteType[];
  onTrackNoteCreate: (time: number) => void;
  onTrackNoteUpdate: (trackNote: TrackNoteType) => void;
}

export class TrackNotesPlugin extends JWPlayerPlugin<trackNotesPluginConfig> {
  constructor(
    playerInstance: JWPlayerType,
    pluginConfig: trackNotesPluginConfig,
    pluginDiv: HTMLElement
  ) {
    this.trackNote = new TrackNote(playerInstance, pluginConfig, pluginDiv);
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
          this.trackNote.addTrackNote();
        },
        "jw-plugin-track-notes"
      );
    });
  }
}
