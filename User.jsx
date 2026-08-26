import { useContext } from "react";
import { UserContext } from "../App";

function User(){
    const user = useContext(UserContext);
    return(
       
    UserInfo.map((user)=>

        <div>
         <p>Name: ${user.name}</p>    
        <p>Email: ${user.email}</p>
        <p>City: ${user.city}</p>
        </div>
    )
    

    );
}
export default User;