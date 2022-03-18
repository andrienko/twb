export const randomId = (length?: number): string => {
  let id = '';
  if (!length || length <= 0) {
    length = 6;
  }
  while (id.length < length) {
    id += Math.random().toString(16).slice(2);
  }
  return id.slice(0, length);
};

let currentId = 0;
export const nextId = (): string => {
  return (currentId++).toString(16);
};

export const fakeUuid = (): string => {
  const chars = randomId(32);
  return `${chars.slice(0, 8)}-${chars.slice(8, 12)}-${chars.slice(12, 16)}-${chars.slice(16, 20)}-${chars.slice(
    20,
    32
  )}`;
};
