// https://stackoverflow.com/a/12709880/754377
declare global {
  interface Window {
    jwplayer: jwplayer.JWPlayerStatic;
    jwplayerPluginJsonp: Function;
  }
}

// TODO: remove it when https://github.com/DefinitelyTyped/DefinitelyTyped/pull/62225 merged
export interface JWPlayerType extends jwplayer.JWPlayer {
  addCues: (cues: { begin: number; cueType: string; text: string }[]) => void;
}

/**
 * @param pluginName Name of the plugin matching the name referenced in the `plugins` object of the player.
 * The `pluginName` must match the name referenced in the `plugins` object of the player.
 * @param playerMinimumVersion Minimum player version required the plugin
 * @param pluginClassOrFunction Plugin function of class to instantiate with new player instances
 */
export const executePlugin = (
  pluginName: string,
  playerMinimumVersion: string,
  pluginClassOrFunction: Function
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
  registerPlugin(pluginName, playerMinimumVersion, pluginClassOrFunction);
};

export class JWPlayerPlugin<PluginConfigType = any> {
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
    playerInstance: JWPlayerType,
    pluginConfig: PluginConfigType,
    pluginDiv: HTMLElement
  ) {
    this.playerInstance = playerInstance;
    this.pluginConfig = pluginConfig;
    this.pluginDiv = pluginDiv;
  }
}
