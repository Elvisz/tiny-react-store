type IsShallowEqual = <TProps extends object>(
  source: TProps,
  target: TProps
) => boolean;

const isShallowEqual: IsShallowEqual = (source, target) => {
  if (source === target) {
    return true;
  }

  const keys = Object.keys(source);
  const length = keys.length;

  if (length !== Object.keys(target).length) {
    return false;
  }

  let i = -1;

  while (++i < length) {
    const key = keys[i];
    const p = source[key];
    const n = target[key];

    // key missing
    if (!(key in target)) {
      return false;
    }

    // following campares will increate 5% performance latency to react inner `isShallowEqual`
    if (
      // RegExp should be immutable
      (p instanceof RegExp &&
        n instanceof RegExp &&
        p.toString() === n.toString()) ||
      // array function or anonymous function defined as variable shoule be immutable
      (typeof p === 'function' &&
        typeof n === 'function' &&
        p.toString() === n.toString())
    ) {
      continue;
    }

    // strict compare Number, Boolean, null, undefined, String and others
    if (!Object.is(p, n)) {
      return false;
    }
  }

  return true;
};

export default isShallowEqual;
