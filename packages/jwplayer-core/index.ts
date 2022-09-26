// https://stackoverflow.com/a/12709880/754377
declare global {
  interface Window {
    jwplayer: jwplayer.JWPlayerStatic;
    jwplayerPluginJsonp: Function;
  }
}

/**
 * @param PluginClass Plugin class to instantiate with new player instances
 */
export const executePlugin = <T = any>(
  PluginClass: typeof JWPlayerPlugin<T>
) => {
  // JW Player custom plugin
  //
  // https://developer.jwplayer.com/jwplayer/docs/jw8-add-a-custom-or-third-party-plugin
  // https://github.com/jwplayer/jwplayer/blob/master/test/files/plugin1.js
  // https://github.com/jwplayer/jwplayer-sdks/blob/master/jw6-plugin-sdk/docs/plugins-js.md
  // https://github.com/jwplayer/jwplayer/issues/3444#issuecomment-508751780

  const registerPlugin =
    window.jwplayerPluginJsonp ||
    (window.jwplayer && window.jwplayer().registerPlugin) ||
    function () {};

  // This line registers <pluginClassOrFunction> code as a <playerMinimumVersion> compatible plugin called <pluginName>.
  registerPlugin(
    PluginClass.pluginName,
    PluginClass.playerMinimumVersion,
    PluginClass
  );
};

export abstract class JWPlayerPlugin<PluginConfigType = any> {
  // FIXME: TypeScript 目前還無法檢查 abstract static properties
  // https://stackoverflow.com/a/43723730/754377
  // https://stackoverflow.com/questions/48813814/enforce-static-member-in-class-using-enum
  /**
   * Name of the plugin matching the name referenced in the `plugins` object of the player.
   * The `pluginName` must match the name referenced in the `plugins` object of the player.
   */
  static readonly pluginName: string;
  /** Minimum player version required the plugin */
  static readonly playerMinimumVersion: string;

  playerInstance;
  pluginConfig;
  pluginDiv;

  /**
   * @param playerInstance Instance of the player API with which the plugin is being registered
   * @param pluginConfig Config block passed in `player().setup()`
   * @param pluginDiv DIV created in the DOM for this plugin.
   * This DIV can be used or the DOM can be manipulated within the plugin code.
   */
  constructor(
    playerInstance: jwplayer.JWPlayer,
    pluginConfig: PluginConfigType,
    pluginDiv: HTMLElement
  ) {
    this.playerInstance = playerInstance;
    this.pluginConfig = pluginConfig;
    this.pluginDiv = pluginDiv;
  }
}
