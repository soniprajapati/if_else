let a=require("readline-sync")
num=a.question("enter number:")

if (num%3==0 && num%7==0){
    console.log("chocolate")
}

else if (num%3==0){
    console.log("choco")
}

else if (num%7==0){
    console.log("late")
}

else{
    console.log(num,"is divisible by 3 or 7")
}