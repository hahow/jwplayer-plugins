declare module "@jwplayer/jwplayer-react" {
  import React from "react";

  export interface JWPlayerProps {
    config?: any;
    didMountCallback?: (args: {
      id: string;
      player: jwplayer.JWPlayer;
    }) => void;
    file: string;
    library: string;
  }

  export default class JWPlayer extends React.Component<JWPlayerProps> {}
}
