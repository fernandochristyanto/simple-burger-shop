import { watcherAuth } from "../modules/login/redux/sagas";
import { watcherBurgerCart } from "../modules/burgerCart/redux/sagas";

export default [
  ...watcherAuth,
  ...watcherBurgerCart,
];
