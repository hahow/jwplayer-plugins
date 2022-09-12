import { ComponentStory, ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import { initPlugin } from "@hahow/jwplayer-plugin-watermark";

import Documentation from "./Watermark.mdx";

const isDevelopment = process.env.NODE_ENV === "development";
const defaultArgs = {
  html: "影片資源請勿外流 影片資源請勿外流 影片資源請勿外流",
  style: {
    color: "rgba(179, 179, 179, 0.3)",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "26px",
    transform: "rotate(20deg)",
    whiteSpace: "nowrap",
  },
};

export default {
  title: "Watermark",
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
          player.registerPlugin("watermark", "8.0", initPlugin);
        }
      }}
      {...args}
    />
  );
};

export const Watermark = Template.bind({});

Watermark.args = {
  config: {
    height: 360,
    plugins: {
      ...(isDevelopment
        ? {
            "./watermark.js": {
              ...defaultArgs,
            },
          }
        : {
            "//unpkg.com/@hahow/jwplayer-plugin-watermark@latest/dist/iife/watermark.js":
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
