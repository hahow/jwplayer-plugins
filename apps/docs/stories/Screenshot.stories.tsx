import { ComponentStory, ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import { initPlugin } from "@hahow/jwplayer-plugin-screenshot";

import Documentation from "./Screenshot.mdx";

const isDevelopment = process.env.NODE_ENV === "development";

export default {
  title: "JW Player Plugins",
  component: JWPlayer,
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
          player.registerPlugin("screenshot", "8.0", initPlugin);
        }
      }}
      {...args}
    />
  );
};

export const Screenshot = Template.bind({});

Screenshot.args = {
  config: {
    height: 360,
    plugins: {
      ...(isDevelopment
        ? {
            "./screenshot.js": { enabled: true },
          }
        : {
            "//unpkg.com/@hahow/jwplayer-plugin-screenshot@latest/dist/iife/screenshot.js":
              { enabled: true },
          }),
    },
    width: 640,
  },
  file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
  library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
};
