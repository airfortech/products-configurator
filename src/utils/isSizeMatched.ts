export const isSizeMatched = (
  minSize: number,
  maxSize: number,
  value: number
): boolean => {
  if (value <= 0) return true;
  return minSize <= value && maxSize >= value;
};
