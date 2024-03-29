import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import JWPlayer from "@jwplayer/jwplayer-react";
import {
  TrackNotesPlugin,
  type TrackNoteType,
} from "@hahow/jwplayer-plugin-track-notes";

import createPluginStory from "../utils/createPluginStory";
import Documentation from "./TrackNotes.mdx";

export default {
  title: "Track Notes",
  component: JWPlayer,
  argTypes: { onTrackNoteUpdate: { action: "clicked" } },
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof JWPlayer>;

export const TrackNotes = createPluginStory({
  pluginName: "trackNotes",
  playerMinimumVersion: "8.14.0",
  pluginClassOrFunction: TrackNotesPlugin,
  pluginScriptUrl:
    "//unpkg.com/@hahow/jwplayer-plugin-track-notes@latest/dist/iife/trackNotes.js",
  pluginConfig: {
    trackNotes: [
      {
        time: 10,
        note: "Hello Track Notes!",
      },
      {
        time: 30,
        note: "The Second Note",
      },
    ],
    onTrackNoteCreate: (time: number) => {
      action("onTrackNoteCreate")(time);

      const trackNotesPlugin = jwplayer().getPlugin(
        "trackNotes"
      ) as TrackNotesPlugin;

      trackNotesPlugin.completeAddTrackNote(time);
    },
    onTrackNoteUpdate: (trackNote: TrackNoteType) => {
      action("onTrackNoteUpdate")(trackNote);
    },
  },
  storyArgs: {
    config: {
      height: 360,
      width: 640,
      // 新版本的播放器不支援 custom cueType 了，需要加這個設定才行
      timeSlider: {
        legacy: true,
      },
    },
    file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
    library: "https://cdn.jwplayer.com/libraries/5vuW2BEP.js",
  },
});
