import { type JWPlayerType, JWPlayerPlugin } from "jwplayer-core";

import { ICON } from "./constants";
import { addClass, hasClass, removeClass } from "./utils";

export class FullViewportPlugin extends JWPlayerPlugin {
  static readonly pluginName = "fullViewport";
  static readonly playerMinimumVersion = "8.0.0";

  constructor(
    playerInstance: JWPlayerType,
    pluginConfig: null,
    pluginDiv: HTMLElement
  ) {
    super(playerInstance, pluginConfig, pluginDiv);

    // 建立劇院模式 inline style
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
      .jwplayer.jw-fullscreen-web {
        bottom: 0;
        height: 100% !important;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100% !important;
        z-index: 9999;
      }
    `;
    document.getElementsByTagName("head")[0].appendChild(style);

    playerInstance.on("ready", () => {
      const playerContainer = playerInstance.getContainer();

      const handleClick = () => {
        if (hasClass(playerContainer, "jw-fullscreen-web")) {
          removeClass(playerContainer, "jw-fullscreen-web");
        } else {
          addClass(playerContainer, "jw-fullscreen-web");
        }
      };

      // 建立劇院模式按鈕
      playerInstance.addButton(
        ICON,
        "劇院模式",
        handleClick,
        "jw-plugin-full-viewport"
      );
    });
  }
}
