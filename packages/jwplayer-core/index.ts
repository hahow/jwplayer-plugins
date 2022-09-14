// https://stackoverflow.com/a/12709880/754377
declare global {
  interface Window {
    jwplayer: jwplayer.JWPlayerStatic;
    jwplayerPluginJsonp: Function;
  }
}

// JW Player custom plugin
//
// https://developer.jwplayer.com/jwplayer/docs/jw8-add-a-custom-or-third-party-plugin
// https://github.com/jwplayer/jwplayer/blob/master/test/files/plugin1.js
// https://github.com/jwplayer/jwplayer-sdks/blob/master/jw6-plugin-sdk/docs/plugins-js.md
// https://github.com/jwplayer/jwplayer/issues/3444#issuecomment-508751780

export const executePlugin = (id: string, target: string, plugin: Function) => {
  const registerPlugin =
    window.jwplayerPluginJsonp ||
    (window.jwplayer && window.jwplayer().registerPlugin) ||
    function () {};

  // This line registers <plugin> code as a <target> version compatible plugin called <id>.
  registerPlugin(id, target, plugin);
};
