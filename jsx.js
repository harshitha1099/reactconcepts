let bikes=['ktm','ns','discover']
let name="Sathish"
let bikeList=<div>{name}
    <ul>
    {
        bikes.map((value,index)=>{
            return <li key={value+index}>{value}</li>
        })
    }
</ul></div>


ReactDOM.render(bikeList,document.getElementById('container'))