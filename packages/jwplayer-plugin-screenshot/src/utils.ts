export function query(selector: any) {
  return document.querySelector(selector);
}

export function createElement(tag: any) {
  return document.createElement(tag);
}

/**
 * 下載檔案
 * @param url 下載的檔案網址
 * @param name 下載的檔案名稱
 */
export function download(url: string, name: string) {
  const elink = document.createElement("a");
  elink.style.display = "none";
  elink.href = url;
  elink.download = name;
  document.body.appendChild(elink);
  elink.click();
  document.body.removeChild(elink);
}
