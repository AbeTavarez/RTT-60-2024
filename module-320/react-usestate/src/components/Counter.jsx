import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter((counter ) => counter + 1) // 0 + 1
        // setCounter((counter) => counter + 1) // 1 + 1
        // setCounter((counter) =>counter + 1) // 2 + 1
    }

    console.log("Hello from component");
    

    return (
        <div>
            <h1>Count: {counter}</h1>
            <hr/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}


export default Counter;