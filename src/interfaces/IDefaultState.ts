export declare interface IDefaultState<T = any, E = any> {
  action: string;
  fetch: boolean;
  res: T | null;
  err: E | null;
};
