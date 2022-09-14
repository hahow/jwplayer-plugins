import { ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import { initPlugin } from "@hahow/jwplayer-plugin-full-viewport";

import createPluginStory from "../utils/createPluginStory";
import Documentation from "./FullViewport.mdx";

export default {
  title: "Full Viewport",
  component: JWPlayer,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof JWPlayer>;

export const FullViewport = createPluginStory({
  pluginName: "fullViewport",
  playerMinimumVersion: "8.0.0",
  pluginClassOrFunction: initPlugin,
  pluginScriptUrl:
    "//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js",
  pluginConfig: {},
  storyArgs: {
    config: {
      height: 360,
      width: 640,
    },
    file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
    library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
  },
});
