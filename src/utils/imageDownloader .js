export const imageDownloader = async (imgSrc, imageName) => {
  try {
    const response = await fetch(imgSrc);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Revoke the object URL to free up resources
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
  }
};
