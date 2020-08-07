import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAILED } from "../../constants";
import { IDoLoginParam, IDoLoginSuccessParam, AuthActions } from "../../interfaces";

export const doLogin = (param: IDoLoginParam): AuthActions => ({ type: DO_LOGIN, data: param });
export const doLoginSuccess = (param: IDoLoginSuccessParam): AuthActions => ({ type: DO_LOGIN_SUCCESS, auth: param });
export const doLoginFailed = (error: any): AuthActions => ({ type: DO_LOGIN_FAILED, error: error });
