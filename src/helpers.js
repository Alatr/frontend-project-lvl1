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
