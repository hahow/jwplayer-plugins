declare module "@jwplayer/jwplayer-react" {
  import React from "react";

  export interface JWPlayerProps {
    config?: any;
    didMountCallback?: (args: {
      id: string;
      player: {
        registerPlugin(
          id: string,
          target: string,
          jsPlugin: (playerInstance: jwplayer.JWPlayer) => void
        ): void;
      };
    }) => void;
    file: string;
    library: string;
  }

  export default class JWPlayer extends React.Component<JWPlayerProps> {}
}
