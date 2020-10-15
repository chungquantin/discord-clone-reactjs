import { combineReducers } from "redux";

import statusReducer from "./reducers/status.reducer";

const rootReducer = combineReducers({
	default: statusReducer,
});

export default rootReducer;
