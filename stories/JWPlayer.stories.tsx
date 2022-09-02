import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JWPlayer from "@jwplayer/jwplayer-react";

export default {
  title: "JW Player Plugins",
  component: JWPlayer,
} as ComponentMeta<typeof JWPlayer>;

const Template: ComponentStory<typeof JWPlayer> = (args) => (
  <JWPlayer {...args} />
);

export const FullViewport = Template.bind({});

FullViewport.args = {
  file: "https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",
  library: "https://cdn.jwplayer.com/libraries/BdsZ7KBq.js",
};
FullViewport.storyName = "劇院模式";
