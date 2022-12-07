import { applyMiddleware, configureStore  } from "redux"


export const store = configureStore(Reducers,{},applyMiddleware(thunk))

