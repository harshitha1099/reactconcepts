let listEle=React.createElement('ol',null,
React.createElement('li',{id:'dell'},'Dell'),
React.createElement('li',null,'HP'),
React.createElement('ul',null,

React.createElement('li',null,'Chicken'),
React.createElement('li',null,'Biriyani'))
)
// ReactDOM.render(listEle,document.getElementById('container'))

let mobiles=['Samsung','Vivo','Iphone','Oppo']
let mobItems=mobiles.map((value,index)=>{
    return React.createElement('li',{key:value+index},value)
})
console.log(mobItems);

let allItems=React.createElement('div',null,listEle,mobItems)
ReactDOM.render(allItems,document.getElementById('container'))