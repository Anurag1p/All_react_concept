import React from 'react'

const StateInReact = () => {
let x= 10
console.log("after clciking the funciton there is no any value in console it means, react can not update the value without stATE")
console.log("value oc x", x)
    const updateState = () => {
  x= 15

    }
console.log("value oc x", x)


  return (
  <>
  <h1>we want to chnage this value{x}</h1>
<button onClick={updateState}>Change now</button>
<p>after clciking the funciton there is no any value in console it means, react can not update the value without stATE</p>
  </>
  )
}

export default StateInReact
