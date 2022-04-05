export const randomId = (length?: number, radix?: number): string => {
  let id = '';
  if (!length || length <= 0) {
    length = 6;
  }
  if (!radix || radix < 2 || radix > 36) {
    radix = 16;
  }
  while (id.length < length) {
    id += Math.random().toString(radix).slice(2);
  }
  return id.slice(0, length);
};

let currentId = 0;
export const nextId = (): string => {
  return (currentId++).toString(16);
};

export const fakeUuid = (): string => {
  const chars = randomId(32, 16);
  return `${chars.slice(0, 8)}-${chars.slice(8, 12)}-${chars.slice(12, 16)}-${chars.slice(16, 20)}-${chars.slice(
    20,
    32
  )}`;
};
