import React, { useEffect ,useState} from "react";
import axios from "axios";
const Axios = () => {
 const [apidata, setApidata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("object", response);
      setApidata(response.data)
    });
  }, []);

  return (
    <>
      <h1>Axios</h1>
      <p>{apidata.map((data)=>{
        return(

           <>
            <p>{data.index}</p>
            <p>{data.name}</p>
           </>
        )
      })}</p>
    </>
  );
};

export default Axios;
