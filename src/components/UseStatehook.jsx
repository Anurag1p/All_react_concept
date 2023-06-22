import React,{useState} from 'react'

const UseStatehook = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count+1)
  }
  return (
<>

<h1> when we click button {count} is incresed.</h1>
<button onClick={increaseCount}>Increase now</button>
</>
  )
}

export default UseStatehook
