import { combineReducers } from "redux";
import datVeReducer from "./datVeReducer";
import BurgerReducer from './BurgerReducer';
const rootReducer = combineReducers({
  //nơi khai báo các state theo từng nghiệp vụ
  datVeReducer,
  BurgerReducer
});
export default rootReducer;
