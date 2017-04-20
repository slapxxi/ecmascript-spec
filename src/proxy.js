function createArray(...values) {
  const handler = {
    get(target, propKey, receiver) {
      const index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    },
  };
  const target = [];
  target.push(...values);
  return new Proxy(target, handler);
}

export { createArray };
