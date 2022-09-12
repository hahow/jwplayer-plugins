import { ICON } from "./constants";
import { createElement, download, query } from "./utils";

interface ScreenshotPluginConfig {
  /** 是否開啟截圖功能，預設 true */
  enabled?: boolean;
}

export function initPlugin(
  playerInstance: jwplayer.JWPlayer,
  pluginConfig: ScreenshotPluginConfig = { enabled: true }
) {
  if (pluginConfig.enabled === false) return;

  playerInstance.on("ready", () => {
    const handleClick = () => {
      const video = query(".jw-video");

      const canvas = createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);

      const dataUri = canvas.toDataURL("image/png");

      download(dataUri, "screenshot.png");
    };

    playerInstance.addButton(ICON, "截圖", handleClick, "jw-plugin-screenshot");
  });
}
