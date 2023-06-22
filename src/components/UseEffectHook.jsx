import React,{useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [ data, setData] = useState("Ram")

    const increaseCount = () => {
      setCount(count+1)
    }

    const updateData = () => {
        setData("Seeta");
    }
    useEffect(()=>{
        console.log("component mounted")
    },[count])
    return (
  <>
  
  <h1> when we click button {count} is incresed.</h1>
  <h1> when we click button {data} is incresed.</h1>
  <button onClick={increaseCount}>Increase now</button>
  <button onClick={updateData}>Update Data</button>
  </>
    )
}

export default UseEffectHook
