let a =[
    "Initializing hack Tool.....",
    "Connecting to Facebook.....",
    "Connecting to server 1.....",
    "Connection Failed. Retrying.....",
    "Connecting to server 2.....",
    "Connected Successfully.....",
    "Username iamsurya",
    "Trying Brute Force.....",
    "200K passwords tried.....",
    "Another 200K passwords tried.....",
    "Match not found.....",
    "Another 200K passwords tried.....",
    "Match not found.....",
    "Another 200K passwords tried.....",
    "Match found",
    "Accessing Account",
    "Hack Successful"
]

const sleep=async(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(true)}, seconds*1000)
    })
}
const showHack=async (message)=>{
   await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>"
    // console.log(message)
}
  
   // The below concept is called IIIFE - Immediately Invoked Function Expressions. We can call function without creating
( async()=>{
    for(let i=0;i<a.length;i++){
        await showHack(a[i])
    }
})()       