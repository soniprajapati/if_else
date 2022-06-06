var a=require("readline-sync")
a1=a.question("enter number:")

var b=require("readline-sync")
b1=b.question("enter number:")

if (1>b1){
    console.log("a is bigger")
}

else if (b1>a1){
    console.log("b is bigger")
}

else{
    console.log("both are equal")
}