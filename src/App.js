import "./App.css";
import Axios from "axios";
import AxiosPost from "./components/AxiosPost";
import Controlled from "./components/Controlled";
import UncontrolledCompo from "./components/UncontrolledCompo";
import AllDefinations from "./components/AllDefinations";
import Reusablecomponent from "./components/Reusablecomponent";
import StateInReact from "./components/StateInReact";
import UseStatehook from "./components/UseStatehook";
import UseEffectHook from "./components/UseEffectHook";
// import TodoList from './TodoList';

function App() {
  return (
    <>
      <div className="App">
        {/* <AllDefinations /> */}

        {/* -----------These two component calls are to show how we reuse our component using props ----------- */}

        {/* <Reusablecomponent name="Anurag pal is my name"/>
      <Reusablecomponent name="I am a software Developer"/> */}

        {/* Example for State in react  */}
        {/* <StateInReact/> */}

        {/* Hooks in react  */}

        {/* ---------------------------useState ----------------- */}
{/* <UseStatehook/> */}

        {/* ---------------------------useEffect ----------------- */}
        <UseEffectHook/>

        {/* <TodoList/> */}

        {/* <Axios/> */}
        {/* <AxiosPost/> */}

        {/* <Controlled/> */}
        {/* <UncontrolledCompo/> */}
      </div>
    </>
  );
}

export default App;
