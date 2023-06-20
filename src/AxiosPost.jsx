import React,{useState,useEffect} from 'react'
import axios from 'axios';
const AxiosPost = () => {
    const data = {fname:"", lname:""}
    const [inputData, setInputdata] = useState(data);

    const handleData = (e) =>{
        setInputdata({...inputData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",inputData)
    .then((response) => {
        console.log("response",response)
    })
    }
   

  return (
   <>
   <label>First Name:</label>
   <input type="text" name="fname" id="fname" value={inputData.fname} onChange={handleData} /><br/>
   <label>Last Name:</label>
   <input type="text" name="lname" id="lname" value={inputData.lname} onChange={handleData}/>
   <button onClick={handleSubmit}>Submit</button>
   
   </>
  )
}

export default AxiosPost
