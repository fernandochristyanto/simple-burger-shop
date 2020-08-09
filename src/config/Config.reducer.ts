import { authReducer } from "../modules/login/redux/reducers";
import { burgerBuilderReducer } from "../modules/burgerOrder/redux/reducers";
import { burgerCartReducer } from "../modules/burgerCart/redux/reducers";

const reducers: object = {
  auth: authReducer,
  burgerBuilder: burgerBuilderReducer,
  burgerCart: burgerCartReducer,
};

export default reducers;