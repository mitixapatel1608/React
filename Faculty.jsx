import { useContext } from "react";
import { FacultyContext } from "../App";

function Faculty(){
    const faculty = useContext(FacultyContext);
    return(
        <>
        <div>
            <h2>
                Faculty Information
            </h2>
            <div>
                <p><img src={faculty.image} alt={faculty.image} width="100px"/></p>
                 <p>Name: {faculty.name}</p>    
                <p>Email: {faculty.email}</p>
                <p>City: {faculty.city}</p>
                
            </div>
        </div>
        </>
    );

}
export default Faculty;