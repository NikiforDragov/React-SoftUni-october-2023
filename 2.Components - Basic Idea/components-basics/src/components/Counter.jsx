import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount((oldValue) => oldValue + 1);
    };

    // if(count < 0) {
    //     return(
    //         <div>
    //             <h3>Invalid Count!</h3>
    //         </div>
    //     )
    // }

    let message = null;

    switch (count) {
        case 1:
            message = 'First blood';
            break;
        case 2:
            message = 'Double kill';
            break;
        case 3:
            message = 'Tripple kill';
            break;
    }

    return (
        <div>
            <h3>Counter</h3>

            {count < 0 ? <p>Invalid Count!</p> : <p>Valid Count</p>}

            {count == 0 && <p>Please start incrementing!</p>}

            <h4>{message}</h4>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}
