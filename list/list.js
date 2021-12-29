let listElement = React.createElement('ul',null,
React.createElement('li',{id:'mango'},'mango'),
React.createElement('li',{id: 'apple'},'apple')
)
  
let mobiles = ['vivo','oppo','samsung','oneplus','iphone','redmi']

//looping thorugh map
let mobileItems = mobiles.map((mobile,index)=>{
    return React.createElement('li',{key:mobile+index},mobile)
})
console.log(mobileItems);

let allItems = React.createElement('div',null,listElement,mobileItems)


ReactDOM.render(allItems,document.getElementById('container'))