function MyApp() {
    const [bikes, setbikes] = React.useState(['splendor', 'KTM', 'Bullet', 'R15', 'Harley'])

    let removeKTM = () => {
        let indexOfKTM = bikes.indexOf('KTM')
        console.log(indexOfKTM);
        if (indexOfKTM >= 0) {
            bikes.splice(indexOfKTM, 1)
            setbikes(
                [...bikes]

            )
        }
    }
    return <div>
        {
            bikes.map((bike, idx) => {
                return <p key={idx + bike}>{bike}</p>
            })
        }
        < button onClick={removeKTM}>Remove KTM</button>
    </div>
}

ReactDOM.render(<MyApp />, document.getElementById('container'))