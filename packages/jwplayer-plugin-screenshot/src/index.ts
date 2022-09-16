import { type JWPlayerType, JWPlayerPlugin } from "jwplayer-core";

import { ICON } from "./constants";
import { download, getBlobUrl } from "./utils";

interface ScreenshotPluginConfig {
  /** 是否開啟截圖功能，預設 true */
  enabled?: boolean;
  /** 截圖檔名，預設 "screenshot" */
  name?: string;
}

export class ScreenshotPlugin extends JWPlayerPlugin<ScreenshotPluginConfig> {
  constructor(
    playerInstance: JWPlayerType,
    pluginConfig: ScreenshotPluginConfig,
    pluginDiv: HTMLElement
  ) {
    super(playerInstance, pluginConfig, pluginDiv);

    const { enabled = true, name = "screenshot" } = pluginConfig;

    if (enabled === false) return;

    playerInstance.on("ready", () => {
      const video = document.querySelector<HTMLVideoElement>(".jw-video");
      // Safari 如果沒加這個 attribute，canvas.toBlob() 會出現 SecurityError: The operation is insecure.
      // https://stackoverflow.com/questions/25753754/canvas-todataurl-security-error-the-operation-is-insecure
      video?.setAttribute("crossOrigin", "anonymous");

      const handleClick = async () => {
        if (video) {
          const dataUri = await getBlobUrl(video);
          download(dataUri, name);
        }
      };

      playerInstance.addButton(
        ICON,
        "截圖",
        handleClick,
        "jw-plugin-screenshot"
      );
    });
  }
}
