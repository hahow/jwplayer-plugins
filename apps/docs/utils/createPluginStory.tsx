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
            // Production 環境會直接 load external plugin script（JWP 預設方式），裡面包涵 registerPlugin()
            // 這裡是為了方便 local 開發 plugin，所以不使用 load external plugin script 的方式
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
        ...(isDevelopment
          ? {
              // Local 開發會去 load 一個假的 public/*.js 欺騙 JWP，實際是透過 registerPlugin() load plugin script
              //
              // 這裡用相對路徑是為了解決 GitHub Pages subpath 的問題
              // https://storybook.js.org/docs/react/configure/images-and-assets#absolute-versus-relative-paths
              [`./${pluginName}.js`]: { ...pluginConfig },
            }
          : {
              // Production 直接使用 external plugin script
              [pluginScriptUrl]: { ...pluginConfig },
            }),
      },
    },
  };

  return Story;
};

export default createPluginStory;
