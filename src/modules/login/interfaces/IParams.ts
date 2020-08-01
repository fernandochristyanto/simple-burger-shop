import { IAuth } from "../../../interfaces";

export declare interface IDoLoginParam {
  username: string,
  password: string,
};

export declare interface IDoLoginSuccessParam extends IAuth { }
