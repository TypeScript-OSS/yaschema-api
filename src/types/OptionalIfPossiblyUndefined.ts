export type OptionalIfPossiblyUndefined<K extends string | number | symbol, T> = [T | undefined] extends [T]
  ? Partial<Record<K, T>>
  : Record<K, T>;
