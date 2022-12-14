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

export function download(url: string, name: string) {
  const link = document.createElement("a");

  link.style.display = "none";
  link.href = url;
  link.download = name;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
