import React from 'react'

const AllDefinations = () => {
  return (
   <>


 
    <p><span>What is jsx :</span> JSX stands for JavaScript XML or extention, with the help of JSX we can write and add HTML in React.</p>
    <p><span>Rules to write JSX</span>
    <ul>
      <li>html code should be wrap up into an top level element</li>
      <li>No if else condition inside JSX but ternary operator is okay</li>
      <li>js Expression in JSX must be wrapped in curly brackets</li>
    </ul>
    </p>
    <hr></hr>
    <p><span>Props in React:</span> Props stands for properties
    <ul>
      <li>Props are used to transfer data from one component to another</li>
      <li>Props are read only, we can not change the value of props</li>
      <li>Prps are just like a function in javaScript</li>
      </ul></p>
      <hr />
   <p><span>What is State in React:</span> State is a built in object that is used to store data or information about the component.
   <ul>
    <li>A state can be modified based on user action or network changes.</li>
    <li>Everytime when the state of an object changes, React re-render the component to the browser.</li>
    <br />
    <li>We can not change the value directly in react <span>that's why we need state </span>in react</li>
   </ul>
   </p>
   <hr />


   <p><span>Hooks:</span> Hooks helps us to use state and other React features without writing a class. <span style={{color:"green",fontWeight:"400",fontSize:"1.2rem"}}>Hooks always starts with use keywords</span>.</p>
<p><span>Rules of Hooks:</span>
<ul>
    <li>Must be written inside function component.</li>
    <li>Must be import in component.</li>
    <li>Must be call at top level of component.</li>
    <li>Con not be conditional.</li>
    
   </ul>

</p>  

<hr />
<p><span>useState hook:</span></p>
<p><ul>
<li>Yeh hmesa ek value ko hmesa accept krta hai yeh hoti h initiaL value, or 2 chheje return krta hai jaise count and setcount </li>
    <li>count iski current state hoti hai or setCounter ek function hota hai</li>

 </ul></p>
 <hr />


 <p><span>useEffect hook:</span> It is used to perform side effect in function in components like setInterval, setTimeOut, also update DOM directly, fetching data </p>
<p><ul>
<li>
  If we want to perform componentDidMount, componentDidUpdate, componentWillUnMount we can do this with useEffect hook easily.
</li>
<li>
  yeh hmesa 2 values accept krta h jisme phli value hoti h voh ek side effect function hota hai joki ek timer funcition fetching fucnitn kuch  ho ho kst hai, <br /> or dusri value 
</li>
<li>When page Render our UseEffect funciton runs everytime without doing anything</li>

 </ul></p>
 <hr />

   </>
  )
}

export default AllDefinations
