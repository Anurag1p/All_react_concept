import React,{useState, useEffect,useRef} from 'react'

const UncontrolledCompo = () => {
    const refObject = useRef();
    console.log("ref",refObject)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log((refObject.current.value).toUpperCase());
    }
  return (
   <>
   
   <form onSubmit={handleSubmit}>
  <label >First name:</label><br/>
  <input type="text" id="fname" name="fname" ref={refObject} /><br/>

  <input type="submit" value="Submit"/>
</form> 
   
   </>
  )
}

export default UncontrolledCompo
