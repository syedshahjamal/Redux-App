import { applyMiddleware, } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk  from "redux-thunk"
import Reducers from "./reducers/combine"


export const store = configureStore({reducer:Reducers}, {} ,applyMiddleware(thunk)) 