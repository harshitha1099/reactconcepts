import React,{useState1} from 'react'

const useCounter=(initialValue, val)=> {
    const [ count , setcount]= useState(initialValue);
    const increment=(value)=>{
        if (value){
        setcount(count+val+value);
        }else{
            setcount(count+val);
        }
    
    };
    const decrement=(value)=>{
        console.log(value);
        setcount(count-val)
    
    };

    const reset=(value)=>{
        if (value){
        setcount(value);
        }else{
            setcount(initialValue);
    
        }
    };
    return [count,increment,decrement,reset];
};

export default useCounter;
