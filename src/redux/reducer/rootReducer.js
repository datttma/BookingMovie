import { combineReducers } from "redux";
import datVeReducer from "./datVeReducer";
const rootReducer = combineReducers({
  //nơi khai báo các state theo từng nghiệp vụ
  datVeReducer,
});
export default rootReducer;
