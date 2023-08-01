console.log("File running");
let a=document.getElementsByClassName("container");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
//    Array.from(a);
//    console.log(a[0]);
//    console.log(a[1]);
   Array.from(a).forEach(()=>{
    console.log(a);
   })
})
