import { ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import { initPlugin } from "@hahow/jwplayer-plugin-screenshot";

import createPluginStory from "../utils/createPluginStory";
import Documentation from "./Screenshot.mdx";

export default {
  title: "Screenshot",
  component: JWPlayer,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof JWPlayer>;

export const Screenshot = createPluginStory({
  pluginName: "screenshot",
  playerMinimumVersion: "8.0.0",
  pluginClassOrFunction: initPlugin,
  pluginScriptUrl:
    "//unpkg.com/@hahow/jwplayer-plugin-screenshot@latest/dist/iife/screenshot.js",
  pluginConfig: {
    enabled: true,
    name: "screenshot",
  },
  storyArgs: {
    config: {
      height: 360,
      width: 640,
    },
    file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
    library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
  },
});
