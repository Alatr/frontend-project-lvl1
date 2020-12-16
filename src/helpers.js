export const observable = (obj, callback) => new Proxy(obj, {
  set(target, name, value) {
    const key = name;
    const targetObj = target;
    const defiendedVal = value;

    targetObj[key] = defiendedVal;
    if (key === 'state') {
      callback(defiendedVal);
    }
    return true;
  },
});

export const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  const range = (maxFloor - minCeil + 1);
  return Math.floor(Math.random() * range) + minCeil; // Максимум и минимум включаются
};

export const isEven = (number) => (+number % 2 === 0);

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
