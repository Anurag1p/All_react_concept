import React, {useState} from 'react'

const Controlled = () => {
    const [ name, setName] = useState("");
    const [ pass, setPass] = useState("");

    const handleChange = (e) => {
    
        if(e.target.name === "fname"){
            const capName = (e.target.value).toUpperCase();
            console.log("object",name)
            setName(capName);
        }else{
            setPass(e.target.value);
            console.log("pass",pass)
        }
        
    }

      // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     const caps = (e.target.value).toUpperCase();
    //     setName(caps)
    // }

    // const handlepass = (e) => {
    //     console.log(e.target.value)
    //     setPass(e.target.value)
    // }

  return (
    <>
    <form>
  <label >First name:</label><br/>
  <input type="text" id="fname" name="fname" value={name} onChange= {handleChange}/><br/>
  <label >Password:</label><br/>
  {/* <input type="password" id="lname" name="pass" value={pass} onChange= {handlepass} /><br/> */}
  <input type="password" id="pass" name="pass" value={pass} onChange= {handleChange} /><br/>
  <input type="submit" value="Submit"/>
</form> 
    
    </>
  )
}

export default Controlled
