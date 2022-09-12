import { ComponentStory, ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import { initPlugin } from "@hahow/jwplayer-plugin-full-viewport";

import Documentation from "./JWPlayer.mdx";

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
          // TODO: 這邊需要解釋一下
          player.registerPlugin("fullViewport", "8.0", initPlugin);
        }
      }}
      {...args}
    />
  );
};

export const FullViewport = Template.bind({});

FullViewport.args = {
  config: {
    height: 360,
    plugins: {
      // TODO: 這邊需要解釋一下：
      // 1. 為什麼要放一個空的 fullViewport.js 檔案
      // 2. 為什麼要用相對路徑
      // https://storybook.js.org/docs/react/configure/images-and-assets#absolute-versus-relative-paths
      ...(isDevelopment
        ? {
            "./fullViewport.js": {},
          }
        : {
            "//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js":
              {},
          }),
    },
    width: 640,
  },
  file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
  library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
};
