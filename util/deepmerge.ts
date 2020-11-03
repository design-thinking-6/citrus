// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function deepMerge(target: any, ...sources: any[]): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          deepMerge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }

  return deepMerge(target, ...sources);
}

export default {
  isObject,
  deepMerge,
};
