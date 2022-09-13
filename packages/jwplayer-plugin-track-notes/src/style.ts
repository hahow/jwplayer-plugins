export const generateStyle = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .jw-overlays .jw-track-note {}
    .jw-overlays .jw-track-note__content-container {
      align-items: center;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 0 rgba(0, 0, 0, .67);
      padding: 2px 4px 2px 2px;
    }
    .jw-overlays .jw-track-note__content-container svg {
      color: #000;
      height: 18px;
      width: 18px;
    }
    .jw-overlays .jw-track-note__content-textarea {
      border: none 0;
      color: #000;
      min-width: 160px;
      outline: none;
      overflow: hidden;
      resize: none;
    }
  `;
  document.getElementsByTagName("head")[0].appendChild(style);
};
