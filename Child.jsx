function Child(props){
    function showGreeting(){
        alert(props.greeting);
    }
    return(
        <button onClick={showGreeting}>
            Show Greeting
        </button>
    );
}
export  default Child;