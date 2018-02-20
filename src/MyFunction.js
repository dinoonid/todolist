export const getKeyDate = index => {
  let aDate = Date.now();
  return aDate.toString() + index.toString();
};
