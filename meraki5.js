var a=require("readline-sync")
b=a.question("enter number:")

if (b<10){
    console.log("number is less then 10")
}

else if (b<20){
    console.log("number is less then 20")
}

else if (b>20){
    console.log("number is bigger then 20")
}