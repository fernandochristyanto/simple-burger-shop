import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAILED } from "../../constants";
import { IDoLoginParam, IDoLoginSuccessParam } from "../../interfaces";
import { IDefaultAction } from "../../../../interfaces";

export const doLogin = (param: IDoLoginParam): IDefaultAction => ({ type: DO_LOGIN, data: param });
export const doLoginSuccess = (param: IDoLoginSuccessParam): IDefaultAction => ({ type: DO_LOGIN_SUCCESS, data: param });
export const doLoginFailed = (error: any): IDefaultAction => ({ type: DO_LOGIN_FAILED, data: error });