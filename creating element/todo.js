function Todo() {
    const [info, setinfo] = React.useState(['React JS', 'Vue JS','C sharp'])
    const [val, setval] = React.useState("")
    let createvalue = (event) => {
        setval(event.target.value)
    }
    console.log(val);
    let create = (data) => {
        if (data != "") {
            info.push(data)
            setinfo(
                [...info]
            )
            setval("")
        }
    }


    let remove = (id) => {
        if (id >= 0) {
            info.splice(id, 1)
            setinfo(
                [...info]
            )
        }
    }


    return <div>
        <h1>To-Do List</h1>
    <table >
        <thead>
            <br />
            <div >
                <input type="text" value={val} onChange={(event) => { createvalue(event) }} placeholder="Enter your task here......" />
                <button  onClick={() => { create(val) }}>Create</button>
            </div>
        </thead>
        <tbody>
            {
                info.map((item, index) => {
                    return <tr >
                        <td key={index}>{item}</td>
                        <td><input type="checkbox" value="Done" id="flexCheckDefault" /></td>
                        <td><button  onClick={() => { remove(index) }}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" /></svg>
                        </button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>

}

ReactDOM.render(<Todo />, document.getElementById('container'))