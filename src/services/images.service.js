const assetImagesContext = require.context(
  "@/assets/images",
  true,
  /.*\.webp$/
);

const getRandomImage = () => {
  const images = assetImagesContext.keys();
  const selectedKey = images[Math.floor(Math.random() * images.length)];

  return assetImagesContext.resolve(selectedKey);
};

export default {
  getRandomImage,
};
