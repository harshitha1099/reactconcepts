class Header extends React.Component{
    render(){
        return <h1>Header</h1>
    }
}
class Content extends React.Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}
class Footer extends React.Component{
    render(){
        return <h1>Footer</h1>
    }
}

ReactDOM.render(<div>
    <Header/>
    <Content name="Pushpa"/>
    <Content name="Raj"/>
    <Content/>
    <Footer/>
</div>,document.getElementById('container'))