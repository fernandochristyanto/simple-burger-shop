import { authReducer } from "../modules/login/redux/reducers";
import { burgerBuilderReducer } from "../modules/burgerOrder/redux/reducers";

const reducers: object = {
  auth: authReducer,
  burgerBuilder: burgerBuilderReducer,
};

export default reducers;