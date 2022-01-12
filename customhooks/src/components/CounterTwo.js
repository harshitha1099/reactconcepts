import React from 'react'
import usecounter from '../hooks/useCounter'

function CounterTwo() {
    const [countt, increment, decrement, reset]= useCounter(0, 100)
    return (
        <div>
             <p>Counter Two-{count}</p>
            <button onClick={() => { increment() }}>Increment</button>
            <button onClick={() => { decrement(50) }}>Decrement</button >
            <button onClick={() => { reset(11) }}>Reset</button>

        </div>
    )
}

export default CounterTwo
