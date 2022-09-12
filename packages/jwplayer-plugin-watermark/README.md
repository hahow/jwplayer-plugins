# jwplayer-plugin-watermark

[![npm version](https://badge.fury.io/js/@hahow%2Fjwplayer-plugin-watermark.svg)](https://badge.fury.io/js/@hahow%2Fjwplayer-plugin-watermark)

這是一個 JW Player plugin，允許在播放器上面顯示浮水印。

## Table of Contents

- [Demo](#demo)
- [External Plugin](#external-plugin)
- [Internal Plugin](#internal-plugin-not-recommended)
- [Configuration](#configuration)

## Demo

[![demo](https://user-images.githubusercontent.com/559351/189577663-e181630e-c9f8-4095-a833-5b7b6f57d198.png)](https://hahow.github.io/jwplayer-plugins/?path=/docs/watermark--watermark)

## External Plugin

IIFE 格式，JW Player 預設使用 plugin 的方式：

### Vanilla JS

```html
<html>
  <head>
    <script src="{your_cloud_hosted_player_library_url}"></script>
  </head>
  <body>
    <div id="myElement"></div>

    <script type="text/JavaScript">
      jwplayer("myElement").setup({
        "playlist": "{your_playlist_url}",
        "plugins": {
          "//unpkg.com/@hahow/jwplayer-plugin-watermark@latest/dist/iife/watermark.js": {
            html: "影片資源請勿外流",
            style: {
              color: "rgba(179, 179, 179, 0.3)",
              transform: "rotate(20deg)",
            }
          }
        }
      });
    </script>
  </body>
</html>
```

### React JS

以 [@jwplayer/jwplayer-react](https://github.com/jwplayer/jwplayer-react) 為例，其它 framework 大同小異：

```jsx
import JWPlayer from '@jwplayer/jwplayer-react';

const App = () => (
  return (
    <JWPlayer
      library='{your_cloud_hosted_player_library_url}'
      playlist='{your_playlist_url}'
      config={{
        plugins: {
          "//unpkg.com/@hahow/jwplayer-plugin-watermark@latest/dist/iife/watermark.js": {
            html: "影片資源請勿外流",
            style: {
              color: "rgba(179, 179, 179, 0.3)",
              transform: "rotate(20deg)",
            }
          }
        },
      }}
    />
  );
);
```

## Internal Plugin (not recommended)

CJS & EMS 格式，非官方使用 plugin 的方式，不建議使用：

1. `npm install @hahow/jwplayer-plugin-watermark`
1. 載入 plugin module `initPlugin`
1. 建立一份空的 `watermark.js`，放在 application 可以讀取的位置（例如 `/`）
1. 使用 JWP 的 `registerPlugin()` API 註冊 plugin

```jsx
import JWPlayer from '@jwplayer/jwplayer-react';

import { initPlugin } from "@hahow/jwplayer-plugin-watermark";

const App = () => (
  return (
    <JWPlayer
      library='{your_cloud_hosted_player_library_url}'
      playlist='{your_playlist_url}'
      config={{
        plugins: {
          "/watermark.js": {
            html: "影片資源請勿外流",
            style: {
              color: "rgba(179, 179, 179, 0.3)",
              transform: "rotate(20deg)",
            }
          }
        },
      }}
      didMountCallback={({ player }) => {
        player.registerPlugin("watermark", "8.0", initPlugin);
      }}
    />
  );
);
```

## Configuration

| config  | type                           | default | description           |
| ------- | ------------------------------ | ------- | --------------------- |
| `html`  | `string`                       | `""`    | 浮水印內容，HTML 格式 |
| `style` | `Partial<CSSStyleDeclaration>` | `{}`    | 自訂浮水印樣式        |
