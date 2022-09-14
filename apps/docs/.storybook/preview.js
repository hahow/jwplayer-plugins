import GitHubCorner from "../components/GitHubCorner";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GitHubCorner url="https://github.com/hahow/jwplayer-plugins" />
    </>
  ),
];
