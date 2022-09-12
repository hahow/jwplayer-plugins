@@ -1,53 +0,0 @@
const icon =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152 1024" class="jw-svg-icon"><path fill="currentColor" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM448 192a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144L261.632 192H448zM704 832a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 0.384H704z"></path></svg>';

export function initPlugin(playerInstance: jwplayer.JWPlayer) {
  // 建立劇院模式 inline style
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
    .jwplayer.jw-fullscreen-web {
      bottom: 0;
      height: 100% !important;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      width: 100% !important;
      z-index: 9999;
    }
  `;
  document.getElementsByTagName("head")[0].appendChild(style);

  playerInstance.on("ready", () => {
    const playerContainer = playerInstance.getContainer();

    const handleClick = () => {
      if (hasClass(playerContainer, "jw-fullscreen-web")) {
        removeClass(playerContainer, "jw-fullscreen-web");
      } else {
        addClass(playerContainer, "jw-fullscreen-web");
      }
    };

    // 建立劇院模式按鈕
    playerInstance.addButton(
      icon,
      "劇院模式",
      handleClick,
      "jw-plugin-full-viewport"
    );
  });
}

function addClass(target: HTMLElement, className: string) {
  return target.classList.add(className);
}

function removeClass(target: HTMLElement, className: string) {
  return target.classList.remove(className);
}

function hasClass(target: HTMLElement, className: string) {
  return target.classList.contains(className);
}
