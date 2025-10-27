// COUNTER - USING REDUX

/* import { createStore } from 'redux'
import counterReducer from './reducer.js'

const store = createStore(counterReducer)

export default store */


// COUNTER - USING RTK

/* import { configureStore } from "@reduxjs/toolkit"
import { counterSlice, userSlice } from "./reducers.jsx"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    }
})

export default store */


// FETCH - USING THUNK

/* import { configureStore } from "@reduxjs/toolkit"
import fetchReducer from './reducers'

const store = configureStore({
    reducer: {
        fetch: fetchReducer
    }
})

export default store */


// FETCH - USING ASYNC THUNK

/* import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './reducers'

const store = configureStore({
    reducer: {
        fetch: fetchReducer
    }
})

export default store */


// TODO

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers'

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store