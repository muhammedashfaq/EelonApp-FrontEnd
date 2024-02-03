// import{configureStore} from "@reduxjs/toolkit"
// import{combineReducers} from "redux"
// import { alertSlice } from "./alertSlice"


// const rootReducer=combineReducers({
//     alerts:alertSlice.reducer,
// })

// const store =configureStore({
//     reducer:rootReducer,
// })

// export default store


// store.js

import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './alertSlice'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export default store;
