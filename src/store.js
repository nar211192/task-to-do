import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./reducers/catReducer";

export default configureStore({
  reducer: {
    catReducer,
  },
});
