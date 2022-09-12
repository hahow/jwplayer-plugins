# jwplayer-plugin-full-viewport

[![npm version](https://badge.fury.io/js/@hahow%2Fjwplayer-plugin-full-viewport.svg)](https://badge.fury.io/js/@hahow%2Fjwplayer-plugin-full-viewport)

劇院模式，又稱作「視窗全螢幕」。可以將播放器放大至整個瀏覽器（viewport），相較於全螢幕（full-screen）模式，操作上更為方便。

## Table of Contents

- Demo
- External Plugin
- Internal Plugin

## Demo

[![demo](https://user-images.githubusercontent.com/559351/189577663-e181630e-c9f8-4095-a833-5b7b6f57d198.png)](https://hahow.github.io/jwplayer-plugins/?path=/docs/jw-player-plugins--full-viewport)

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
          "//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js": {}
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
          "//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js": {},
        },
      }}
    />
  );
);
```

## Internal Plugin (not recommended)

CJS & EMS 格式，非官方使用 plugin 的方式，不建議使用：

1. `npm install @hahow/jwplayer-plugin-full-viewport`
1. 載入 plugin module `initPlugin`
1. 建立一份空的 `fullViewport.js`，放在 application 可以讀取的位置（例如 `/`）
1. 使用 JWP 的 `registerPlugin()` API 註冊 plugin

```jsx
import JWPlayer from '@jwplayer/jwplayer-react';

import { initPlugin } from "@hahow/jwplayer-plugin-full-viewport";

const App = () => (
  return (
    <JWPlayer
      library='{your_cloud_hosted_player_library_url}'
      playlist='{your_playlist_url}'
      config={{
        plugins: {
          "/fullViewport.js": {},
        },
      }}
      didMountCallback={({ player }) => {
        player.registerPlugin("fullViewport", "8.0", initPlugin);
      }}
    />
  );
);
```
