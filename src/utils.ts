export const skeletonArrayFactory = (arraySize: number) =>
  new Array(arraySize).fill(0).map((_, idx) => idx);
