const userName = 'Harshitha'
const element = <h1 id="demo">Hello,{userName}</h1>

let fruits = ['mango', 'papaya', 'apple', 'banana']

let items = <ul>
    {
        fruits.map((value, index) => {
            return <li key={value + index}>{value}</li>
        })
    }
</ul>

let allItems=React.createElement('div',null,element,items)
React.DOM.render(allItems, document.getElementById('container'))