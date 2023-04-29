import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { increaseCounter, decreaseCounter, sumCounter } from './store/counterReducer';
import {changeName} from './store/nameReducer'


function App() {

  const count = useSelector(state=>state.counter.count);
  const user = useSelector(state=>state.name.user)

  const dispatch = useDispatch()

  const increase = () => {
    dispatch(increaseCounter())
  }

  const decrease = () => {
    dispatch(decreaseCounter())
  }

  const sum = () => {
    dispatch(sumCounter())
  }

  const changeNames =(e) => {
    dispatch(changeName (e.target.value))
  }

  return (
    <>
      
      <h4>My name: {user.name}</h4>
      <input type="text" onChange={changeNames} />
      
      <h4>Counter: {count}</h4>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={sum}>sum</button>
    </>
  )
}

export default App
