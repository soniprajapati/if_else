let a=require("readline-sync")
num=a.question("enter number:")

if (num%5==0 && num%15==0){
    console.log("divisiible bye both")
}

else{
    console.log("not divisible by both")
}