export const getImageURL = (
  selectedSize,
  previewURL,
  webformatURL,
  largeImageURL
) =>
  selectedSize === "Small"
    ? previewURL
    : selectedSize === "Medium"
    ? webformatURL
    : selectedSize === "Big"
    ? largeImageURL
    : previewURL;
