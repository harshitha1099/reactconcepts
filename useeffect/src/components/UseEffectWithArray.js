import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function UseEffectWithArray() {

    const [birds, setbirds] = useState([])

    useEffect(()=>{
        if(birds.length>0){
            console.log("useEffect [birds] executed");
        }
    },[birds])

    let addBird=()=>{
        let birdsCopy = [...birds]
        birdsCopy.push("peacock")
        setbirds(birdsCopy)
    }
    return (
        <div>
            <button onClick={addBird}>Add bird</button>
            {
                birds.map((val,idx)=>{
                    return <p key={val+idx}>{val} at index {idx}</p>
                })
            }
        </div>
    )
}

export default UseEffectWithArray
