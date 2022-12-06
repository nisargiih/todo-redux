import {  configureStore } from "@reduxjs/toolkit";
import reducer from "../reduser/reducer";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore({
    reducer : reducer,
},
composeWithDevTools()
 );

export default store;