import Child from "./Child";

function Parent(){
    return(
        <div>
            <h1>Parent Component</h1>
            <Child greeting="Hello from parent!"/>
        </div>
    );
}
export default Parent;