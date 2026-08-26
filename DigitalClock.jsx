import { useEffect, useState } from "react";


function DigitalClock(){
    const[time,setTime]=useState(new Date);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date);
        },1000);
        return()=>clearInterval(interval);
    });
    return(
        <>
        <div>
        <h2>Digital Clock</h2>
        <p>current Time{time.toLocaleTimeString()}</p>
        </div>
        

        </>
    );
}
export default DigitalClock;