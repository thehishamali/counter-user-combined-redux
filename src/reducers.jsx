// COUNTER - USING REDUX

/* const initialState = { count: 0 }

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + 1 }
        case 'DECREMENT': return { count: state.count - 1 }
        case 'RESET': return { count: 0 }
        default: return state
    }
}

export default counterReducer */


// COUNTER - USING RTK

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -=1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState: { name: '', isLoggedIn: false },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.name = ''
            state.isLoggedIn = false
        }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
export const { login, logout } = userSlice.actions