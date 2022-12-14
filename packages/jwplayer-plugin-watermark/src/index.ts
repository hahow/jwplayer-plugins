import { JWPlayerPlugin } from "jwplayer-core";

interface WatermarkPluginConfig {
  /** 浮水印內容，HTML 格式，預設空字串 */
  html?: string;
  /** 自訂浮水印樣式 */
  style?: Partial<CSSStyleDeclaration>;
}

export class WatermarkPlugin extends JWPlayerPlugin<WatermarkPluginConfig> {
  static readonly pluginName = "watermark";
  static readonly playerMinimumVersion = "8.0.0";

  constructor(
    playerInstance: jwplayer.JWPlayer,
    pluginConfig: WatermarkPluginConfig,
    pluginDiv: HTMLElement
  ) {
    super(playerInstance, pluginConfig, pluginDiv);

    playerInstance.on("ready", function (event) {
      pluginDiv.style.top = "0";
      pluginDiv.style.bottom = "0";
      pluginDiv.style.left = "0";
      pluginDiv.style.right = "0";
      pluginDiv.style.display = "flex";
      pluginDiv.style.justifyContent = "center";
      pluginDiv.style.alignItems = "center";
      pluginDiv.style.pointerEvents = "none";

      const element = document.createElement("div");

      Object.assign(element.style, pluginConfig.style ?? {});

      element.innerHTML = pluginConfig.html ?? "";

      pluginDiv.appendChild(element);
    });
  }
}
