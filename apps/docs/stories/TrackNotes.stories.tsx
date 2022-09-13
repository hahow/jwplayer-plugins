import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import JWPlayer from "@jwplayer/jwplayer-react";
import {
  TrackNotesPlugin,
  type TrackNoteType,
} from "@hahow/jwplayer-plugin-track-notes";

import Documentation from "./TrackNotes.mdx";

const isDevelopment = process.env.NODE_ENV === "development";
const defaultArgs = {
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

    const trackNote = { time };
    const trackNotesPlugin = jwplayer().getPlugin("trackNotes");

    trackNotesPlugin.trackNote.completeAddTrackNote(trackNote);
  },
  onTrackNoteUpdate: (trackNote: TrackNoteType) => {
    action("onTrackNoteUpdate")(trackNote);
  },
};

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

const Template: ComponentStory<typeof JWPlayer> = (args) => {
  return (
    <JWPlayer
      didMountCallback={({ player }) => {
        if (isDevelopment) {
          player.registerPlugin("trackNotes", "8.14.0", TrackNotesPlugin);
        }
      }}
      {...args}
    />
  );
};

export const TrackNotes = Template.bind({});

TrackNotes.args = {
  config: {
    height: 360,
    plugins: {
      ...(isDevelopment
        ? {
            "./trackNotes.js": {
              ...defaultArgs,
            },
          }
        : {
            "//unpkg.com/@hahow/jwplayer-plugin-track-notes@latest/dist/iife/trackNotes.js":
              {
                ...defaultArgs,
              },
          }),
    },
    width: 640,
  },
  file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
  library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
};
