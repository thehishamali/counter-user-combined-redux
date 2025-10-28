// useContext EXERCISE

/* import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home.jsx'
import Positive from './Positive.jsx'
import Negative from './Negative.jsx'
import NumContext from './NumContext.jsx'

export default function App() {
  const [input, setInput] = useState('')

  return (
    <NumContext.Provider value={{input, setInput}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/positive' element={<Positive />} />
          <Route path='/negative' element={<Negative />} />
        </Routes>
      </BrowserRouter>
    </NumContext.Provider>
  )
} */


// COUNTER - USING REDUX

/* import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})} disabled={ count === 0 }>-</button>
      <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
    </>
  )
} */


// COUNTER - USING RTK

/* import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, login, logout } from './reducers'

export default function App() {
  const count = useSelector(state => state.counter.count)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(-5))}>Increment by the amount set</button>

      <h1>{user.isLoggedIn ? user.name : 'Not logged in'}</h1>
      <button onClick={() => dispatch(login({name: 'Hisham'}))}>Login</button>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </>
  )
} */

/* import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByValue } from './reducers.jsx'

export default function App() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByValue(5))}>Increment by a delta</button>
    </>
  )
} */


// FETCH - USING THUNK

/* import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './reducers'

export default function App() {
  const dispatch = useDispatch()
  const { info, loading, error } = useSelector(state => state.fetch)

  return (
    <>
      <button onClick={() => dispatch(fetchData())}>Load Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {info.length > 0 && info.map(i => <li key={i.id}>{i.title}</li>)}
    </>
  )
} */


// FETCH - USING ASYNC THUNK

/* import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './reducers'

export default function App() {
  const { info, loading, error } = useSelector(state => state.fetch)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(fetchData())}>Add info</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {info.length > 0 && info.map(l => {
        return <li key={l.id}>{l.title}</li>
      })}
    </>
  )
} */


// TODO

/* import { useSelector, useDispatch } from 'react-redux'
import { setInput, setList, remove, startEditing, cancelEditing } from './reducers.jsx'

export default function App() {
  const input = useSelector(state => state.todo.input)
  const list = useSelector(state => state.todo.list)
  const editingIndex = useSelector(state => state.todo.editingIndex)
  const dispatch = useDispatch()

  return (
    <>
      <input type='text' value={input} placeholder='Type anything...' onChange={(e) => dispatch(setInput(e.target.value))} />
      <button onClick={() => dispatch(setList())}>{editingIndex === null ? 'Submit' : 'Save'}</button>
      {editingIndex !== null && <button onClick={() => dispatch(cancelEditing())}>Cancel</button>}
      <ul>
        {list.map((l, i) => <li key={i}>{l} <button onClick={() => dispatch(startEditing(i))}>Edit</button> <button onClick={() => dispatch(remove(i))}>Remove</button></li>)}
      </ul>
    </>
  )
} */