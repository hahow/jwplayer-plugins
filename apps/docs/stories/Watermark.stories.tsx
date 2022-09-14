import { ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import { initPlugin } from "@hahow/jwplayer-plugin-watermark";

import createPluginStory from "../utils/createPluginStory";
import Documentation from "./Watermark.mdx";

export default {
  title: "Watermark",
  component: JWPlayer,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof JWPlayer>;

export const Watermark = createPluginStory({
  pluginName: "watermark",
  playerMinimumVersion: "8.0.0",
  pluginClassOrFunction: initPlugin,
  pluginScriptUrl:
    "//unpkg.com/@hahow/jwplayer-plugin-watermark@latest/dist/iife/watermark.js",
  pluginConfig: {
    html: "影片資源請勿外流 影片資源請勿外流 影片資源請勿外流",
    style: {
      color: "rgba(179, 179, 179, 0.3)",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "26px",
      transform: "rotate(20deg)",
      whiteSpace: "nowrap",
    },
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
