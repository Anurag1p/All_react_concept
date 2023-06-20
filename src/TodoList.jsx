import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  // console.log("object,",activity)
  const addActivity = () => {
    // -------------first Method  isme first click me empty array aata h  aesa islie ho rha h coz react is asynchronous yeh ek bar me ek kaam krta h isliye

    // setListData([...listData, activity])
    // console.log("ListData", listData)

    // second mehtod
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log("updatedList", updatedList);
      // yeh line empty kr degi input field ko
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => {
const updatedListData = listData.filter((elem,id) =>{
  return i !== id;
})
setListData(updatedListData)

}

const removeAll = () => {
  setListData([])
}

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          name="addnote"
          id="note"
          placeholder="Add Your Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className=".btn-position" onClick={addActivity}>
          Add Activity
        </button>

        <p className="List-heading">Activity List</p>
        {listData !== [] && listData.map((items, i) => {
          return(
            <>
           <div className="postionbtn">
           <div className="listData" key={i}>
              
              
              {items}
              </div>
              <button className="removebtn" onClick={()=>removeActivity(i)}>Remove</button>
           </div>
              
            </>
          )

        })}

{listData.length>=1 &&
              <button onClick={removeAll}>Remove ALL</button>}
            
      </div>
    </>
  );
};

export default TodoList;
