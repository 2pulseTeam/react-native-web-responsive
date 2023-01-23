// src/utils/getOrientation.ts
var getOrientation = (width, height) => {
  return width > height ? "landscape" : "portrait";
};

export {
  getOrientation
};
