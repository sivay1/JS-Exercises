import { useState } from "react";
function Intro3() {
    const [count, setCount] = useState(0);

    function incrementValue(){
        setCount(count + 1);
    }
    function decreaseValue(){
        setCount(count - 1);
    }
    return (
        <div className="blog-post-intro">
            <button>click</button>
            <button onClick={decreaseValue}>-</button>
            <span>{count}</span>
            <button onClick={incrementValue}>+</button>
        </div>
    );
};

export default Intro3;