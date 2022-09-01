export type EnumType<T> = Extract<T[keyof T],symbol>;
