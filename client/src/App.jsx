import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Subscription Reminder</h1>
      <div>
        <form>
          <div className='login-div'>
            <label>username:</label>
            <input></input>
          </div>
          <div className='login-div'>
            <label>password:</label>
            <input></input>
          </div>
        </form>
      </div >
      <button className='description'>Login</button>
    </>
  )
}

export default App
