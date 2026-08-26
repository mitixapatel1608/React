import {useState} from "react";
import { useEffect } from "react";
import '../assets/card.css';
function Api(){
    const[users,setUsers]=useState([]);
   useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(response=>response.json())
       .then(data=>setUsers(data));
    },[]);
    return(
        <>
        <h2>Api Application</h2>
        {
            users.map((user)=>(
                <div style={{justifyContent:"center",margin:"4px"}}>
                <div className="card">
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>

                </div>
                </div>
            ))
        
        
        }
        </>
    );
}
export default Api;