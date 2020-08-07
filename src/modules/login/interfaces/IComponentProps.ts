import { IDoLoginParam } from "./IParams";
import { IDefaultState, IAuth } from "../../../interfaces";

export declare interface ILoginProps {
  auth: IDefaultState<IAuth>,
  onLogin: (param: IDoLoginParam) => any,
}
