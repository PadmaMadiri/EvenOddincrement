// Write your code here
import React, {useState} from 'react'
import './index.css'

const EvenOddApp = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    const randomNumber = Math.floor(Math.random() * 101) // Random number between 0-100
    setCount(count + randomNumber)
  }

  return (
    <div className="container">
      <h1 className="heading">Count {count}</h1>
      <p className="description">Increase By Random Number Between 0 to 100</p>
      <p className="status">
        {count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
      </p>
      <button className="increment-button" onClick={incrementCount}>
        Increment
      </button>
    </div>
  )
}

export default EvenOddApp
