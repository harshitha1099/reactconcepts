function Header(props){
    return <h1 className="head">Header {props.name}</h1>
}

function Content({name,id}){
    return <h1>Content {name} {id}</h1>
}

function Footer({name}){
    return <h1>Footer  {name.n1}{name.n2}</h1>
}

ReactDOM.render(
    <div>
        <Header name="ajay"/>
        <Content name="vijay" id="1"/>
        <Content/>
        <Footer name={{n1:"sujay",n2:"kumar"}}/>
    </div>,document.getElementById('container')
)