import { createStore } from "redux";
import { resumeReducer } from "./resumeReducer";

const store = createStore(resumeReducer);

export default store;
