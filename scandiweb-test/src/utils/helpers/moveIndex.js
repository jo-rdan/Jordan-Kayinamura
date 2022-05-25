export const move = (from, to, arr) => {
  const newArr = [...arr];

  const item = newArr.splice(from, 1)[0];
  newArr.splice(to, 0, item);

  return newArr;
};
