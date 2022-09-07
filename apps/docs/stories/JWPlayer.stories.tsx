import { ComponentStory, ComponentMeta, Meta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";
import initPlugin from "@hahow/jwplayer-plugin-full-viewport/src/initPlugin";

export default {
  title: "JW Player Plugins",
  component: JWPlayer,
} as ComponentMeta<typeof JWPlayer>;

const Template: ComponentStory<typeof JWPlayer> = (args) => {
  return (
    <JWPlayer
      didMountCallback={({ player }) => {
        player.registerPlugin("fullViewport", "8.0", initPlugin);
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
      "/fullViewport.js": {},
    },
    width: 640,
  },
  file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
  library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
};
FullViewport.storyName = "劇院模式";
