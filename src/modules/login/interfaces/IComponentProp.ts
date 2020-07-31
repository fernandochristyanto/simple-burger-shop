import { IAuth } from "./IAuth";
import { IDoLoginParam } from "./IParams";
import { IDefaultState } from "../../../interfaces";

export declare interface ILoginProps {
  children?: React.ReactNode,
  auth: IDefaultState<IAuth>,
  onLogin: (param: IDoLoginParam) => any,
}
