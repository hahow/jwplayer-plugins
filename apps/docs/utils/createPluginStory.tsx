import { ComponentStory } from "@storybook/react";
import JWPlayer, { JWPlayerProps } from "@jwplayer/jwplayer-react";

const isDevelopment = process.env.NODE_ENV === "development";

type PluginStoryArgs = {
  /** Minimum player version required the plugin */
  playerMinimumVersion: string;
  /** Plugin function of class to instantiate with new player instances */
  pluginClassOrFunction: Function;
  /** TODO: */
  pluginConfig: any;
  /**
   * Name of the plugin matching the name referenced in the `plugins` object of the player
   * The `pluginName` must match the name referenced in the `plugins` object of the player.
   */
  pluginName: string;
  /**
   * the URL of the plugin script that will be added to the `plugins`. When the player is instantiated, the plugin script is downloaded and initialized.
   */
  pluginScriptUrl: string;
  /** TODO: */
  storyArgs: JWPlayerProps;
};

const createPluginStory = ({
  playerMinimumVersion,
  pluginClassOrFunction,
  pluginConfig,
  pluginName,
  pluginScriptUrl,
  storyArgs,
}: PluginStoryArgs) => {
  const Template: ComponentStory<typeof JWPlayer> = (args) => {
    return (
      <JWPlayer
        didMountCallback={({ player }) => {
          if (isDevelopment) {
            // TODO: 這邊需要解釋一下
            player.registerPlugin(
              pluginName,
              playerMinimumVersion,
              pluginClassOrFunction
            );
          }
        }}
        {...args}
      />
    );
  };

  const Story = Template.bind({});

  Story.args = {
    ...storyArgs,
    config: {
      ...storyArgs.config,
      plugins: {
        ...storyArgs.config?.plugins,
        // TODO: 這邊需要解釋一下：
        // 1. 為什麼要放一個空的 fullViewport.js 檔案
        // 2. 為什麼要用相對路徑
        // https://storybook.js.org/docs/react/configure/images-and-assets#absolute-versus-relative-paths
        ...(isDevelopment
          ? {
              [`./${pluginName}.js`]: { ...pluginConfig },
            }
          : {
              [pluginScriptUrl]: { ...pluginConfig },
            }),
      },
    },
  };

  return Story;
};

export default createPluginStory;
