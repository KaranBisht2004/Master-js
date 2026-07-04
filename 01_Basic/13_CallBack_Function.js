const greeting = ((callback)=>{
    console.log("hello how are u");
    callback()
})
const meet = (()=>{
    console.log("im good wby");  
})
greeting(meet) 
