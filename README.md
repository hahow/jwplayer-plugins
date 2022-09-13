# JW Player Plugins

This is the monorepo of the [JW Player](https://www.jwplayer.com/) plugins that @hahow is using.

powered by:

- [Turborepo](https://turborepo.org/) — High-performance build system for Monorepos
- [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- [Changesets](https://github.com/changesets/changesets) - for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) - for fully automated package publishing

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/docs`: a [Storybook](https://storybook.js.org/) app
- `packages/jwplayer-plugins-full-viewport`: a JW Player plugin that allows users to switch the video player to full-viewport size mode
- `packages/jwplayer-plugins-screenshot`: a JW Player plugin that allows users to capture the current frame and download it as a PNG image
- `packages/jwplayer-plugins-track-notes`: a JW Player plugin that allows users to mark notes on the player's timeline
- `packages/jwplayer-plugins-watermark`: a JW Player plugin that allows to display watermarks on the video player
- `packages/eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `packages/tsconfig`: `tsconfig.json`s used throughout the monorepo

## Usage

Please refer to the [Documentation](https://hahow.github.io/jwplayer-plugins/)

## Contributing

### Installation

1. Clone the repo

```
git clone git@github.com:hahow/jwplayer-plugins.git
```

2. Install NPM packages

```
npm install
```

### Commands

- `npm run build` - Build all packages including the Storybook site
- `npm run dev` - Run all packages locally and preview with Storybook
- `npm run lint` - Lint all packages
- `npm run clean` - Clean up all node_modules and dist folders (runs each package's clean script)
- `npm run changeset` - Generate a changeset

Turborepo enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `npm install`:

```bash
# Install npm package only for apps/docs
npm install some-package -w=docs

# Install npm package only for packages/jwplayer-plugin-watermark
npm install some-package -w=packages/jwplayer-plugin-watermark

# Linting apps/docs
npm run lint -w=docs

# Build the specified package
npm run build -w=packages/jwplayer-plugin-watermark
```

### Versioning & Publishing Packages

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

#### Generating the Changelog

To generate your changelog, run `npm run changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you merge your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`.
