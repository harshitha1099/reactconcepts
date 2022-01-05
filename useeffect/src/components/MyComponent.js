import React from 'react'

function MyComponent() {

    const [name, setname] = useState('')
    return (
        <div>
          <p>Name:{name}</p>  
        </div>
    )
}

export default MyComponent
