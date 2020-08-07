import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAILED } from "../constants";
import { IDoLoginParam } from "./";
import { IAuth } from "../../../interfaces";

declare interface IDoLoginAction {
  type: typeof DO_LOGIN
  data: IDoLoginParam
}

declare interface IDoLogoinSuccessAction {
  type: typeof DO_LOGIN_SUCCESS
  auth: IAuth
}

declare interface IDoLoginFailedAction {
  type: typeof DO_LOGIN_FAILED
  error: any
}

export type AuthActions = IDoLoginAction | IDoLogoinSuccessAction | IDoLoginFailedAction;
