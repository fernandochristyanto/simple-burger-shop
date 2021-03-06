import { IDefaultState } from "../../../../interfaces";
import initialDefaultState from "../../../../constants/InitialDefaultState";
import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAILED } from "../../constants";
import { IAuth } from "../../../../interfaces";
import { AuthActions } from "../../interfaces";

export const authReducer = (
  state: IDefaultState<IAuth> = initialDefaultState,
  action: AuthActions,
): IDefaultState<IAuth> => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        action: action.type,
        fetch: true,
        res: null,
        err: null,
      }

    case DO_LOGIN_SUCCESS:
      return {
        ...state,
        action: action.type,
        fetch: false,
        res: action.auth,
        err: null,
      }

    case DO_LOGIN_FAILED:
      return {
        ...state,
        action: action.type,
        fetch: false,
        res: null,
        err: action.error,
      }

    default:
      return state;
  }
}