import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterOne() {
    const [countt, increment, decrement, reset]= useCounter(10, 20)
    return (
        <div>
            <p>COunter One-{count}</p>
            <button onClick={() => { increment(80) }}>Increment</button>
            <button onClick={() => { decrement() }}>Decrement</button >
            <button onClick={() => { reset() }}>Reset</button>

        </div>
    )
}

export default CounterOne
