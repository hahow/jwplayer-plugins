export function query(selector) {
  return document.querySelector(selector);
}

export function createElement(tag) {
  return document.createElement(tag);
}

export function download(url, name) {
  const elink = document.createElement("a");
  elink.style.display = "none";
  elink.href = url;
  elink.download = name;
  document.body.appendChild(elink);
  elink.click();
  document.body.removeChild(elink);
}
