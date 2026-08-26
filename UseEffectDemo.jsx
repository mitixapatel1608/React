import {useState} from "react";
import { useEffect } from "react";
function UseEffectDemo(){
    const[count,setCount]=useState(0);
   useEffect(()=>{
       document.title=`You have clicked ${count}`;
    },[count]);
    return(
        <>
        <h2> counter Application</h2>
        <p><button onClick={()=>setCount(count+1)}>Increment</button></p>
        <p>Count:{count}</p></>
    );
}
export default UseEffectDemo;