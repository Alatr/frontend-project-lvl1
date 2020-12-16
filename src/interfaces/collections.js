/*  */
export const addItemInList = (item, list) => list.push(item);
export const returnList = (state, key) => state[key];
export const isEmptyList = (list) => (list.length === 0);
export const increment = (item) => item + 1;
export const getKey = (obj, key) => obj[key];

export const getLastItem = (object) => {
  if (isEmptyList(object)) return null;
  return object[object.length - 1];
};
