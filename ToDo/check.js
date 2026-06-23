let pro=new Promise((resolve,reject)=>{
    let success=false
    setTimeout(()=>{
     
     if(success){
        resolve("promise resolved successfull")
    }
    else{
        reject("promise rejected")
    }

    },2000)
    
})
console.log(pro)
pro.then((data)=>{
   console.log(data)
})
.catch((error)=>{
    console.log(error)
})