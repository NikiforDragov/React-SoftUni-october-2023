import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(oldValue => oldValue + 1)
    }

    return (
        <div>
            <h3>Counter</h3>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}
