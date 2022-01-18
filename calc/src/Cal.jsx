import React from "react"


function add(a,b){
  return a+b;
  } ;

  let sub = (a,b)=>{
    return a-b;
    } ;

  let div = (a,b)=>{
    let ans = a/b;
      return ans.toFixed(2);
      }

 function mults (a,b){
   return a*b
 }

 export default mults;

 export {add,div,sub}