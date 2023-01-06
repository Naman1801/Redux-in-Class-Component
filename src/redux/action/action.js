
const Increment = (data)=>{
    console.log("data",data);
    return({
        type:"INCREMENT",
        payload:1
    })
}
const Decrement = (data)=>{
    return({
        type:"DECREMENT",
        payload:1
    })
}

export{Increment,Decrement}