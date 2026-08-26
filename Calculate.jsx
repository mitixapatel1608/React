import { useState } from "react";
function Calculate(){
    const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const[result,setresult]=useState(0);
    const add =() => { setresult(Number(num1)+Number(num2));}
    const div =() => { setresult(Number(num1)/Number(num2));}
    const sub =() => { setresult(Number(num1)-Number(num2));}
    const mul =() => { setresult(Number(num1)*Number(num2));}
    return(
        <>
        <h2>Simple Calculate</h2>
        <div>
            <input type="number" placeholder="Enter no 1:" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number" placeholder="Enter no 2:" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
            <button onClick={add}>Add</button>
            <button onClick={div}>Divide</button>
            <button onClick={sub}>Subtract</button>
            <button onClick={mul}>Multiply</button>
        </div>
        <div>Result is{result}</div>
        </>
    );
}
export default Calculate;