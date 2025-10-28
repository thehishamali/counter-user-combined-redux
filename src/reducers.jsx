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

/* import { createSlice } from '@reduxjs/toolkit'

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
export const { login, logout } = userSlice.actions */

/* import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 },
        incrementByValue: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, reset, incrementByValue } = counterSlice.actions
export default counterSlice.reducer

 */
// FETCH - USING THUNK

/* import { createSlice } from '@reduxjs/toolkit'

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: { info: [], loading: false, error: null },
    reducers: {
        fetchStart: (state) => { state.loading = true },
        fetchSuccess: (state, action) => {
            state.loading = false
            state.info = action.payload
        },
        fetchError: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { fetchStart, fetchSuccess, fetchError } = fetchSlice.actions

export const fetchData = () => async (dispatch) => {
    dispatch (fetchStart())

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        dispatch(fetchSuccess(data.slice(0, 10)))
    }
    catch (err) {
        dispatch(fetchError(err.message))
    }
}

export default fetchSlice.reducer */


// FETCH - USING ASYNC THUNK

/* import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('fetch/data', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return data
})

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: { info: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.info = action.payload
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default fetchSlice.reducer */


// TODO

/* import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: { input: '', list: [], editingIndex: null },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload
        },
        setList: (state) => {
            if (state.editingIndex !== null) {
                state.list[state.editingIndex] = state.input
                state.editingIndex = null
            }
            else {
                state.list.push(state.input)
            }
            state.input = ''
        },
        remove: (state, action) => {
            state.list = state.list.filter((l, i) => i !== action.payload)
        },
        startEditing: (state, action) => {
            state.editingIndex = action.payload
            state.input = state.list[state.editingIndex]
        },
        cancelEditing: (state) => {
            state.editingIndex = null
            state.input = ''
        }
    }
})

export const { setInput, setList, remove, startEditing, cancelEditing } = todoSlice.actions
export default todoSlice.reducer */