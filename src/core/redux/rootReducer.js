import { combineReducers } from "redux";

import userReducer from "./reducers/user.reducer";
import uiReducer from "./reducers/ui.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	ui: uiReducer,
});

export default rootReducer;
