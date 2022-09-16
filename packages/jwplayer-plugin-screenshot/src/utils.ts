export function getBlobUrl(video: HTMLVideoElement): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      canvas?.getContext("2d")?.drawImage(video, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(URL.createObjectURL(blob));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
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
