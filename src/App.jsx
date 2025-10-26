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

import { useSelector, useDispatch } from 'react-redux'
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
}