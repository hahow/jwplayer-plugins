import { ICON } from "./constants";
import { download, getBlobUrl } from "./utils";

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
    const video = document.querySelector<HTMLVideoElement>(".jw-video");
    // Safari 如果沒加這個 attribute，canvas.toBlob() 會出現 SecurityError: The operation is insecure.
    // https://stackoverflow.com/questions/25753754/canvas-todataurl-security-error-the-operation-is-insecure
    video?.setAttribute("crossOrigin", "anonymous");

    const handleClick = async () => {
      if (video) {
        const dataUri = await getBlobUrl(video);
        download(dataUri, "screenshot");
      }
    };

    playerInstance.addButton(ICON, "截圖", handleClick, "jw-plugin-screenshot");
  });
}
