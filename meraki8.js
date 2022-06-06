var a=require("readline-sync")
water=a.question("enter water in liters:")

if (water>1 && water<10){
    console.log("NO NEED TO FILL WATER")
}

else if (water>10){
    console.log("OVER-FLOW")
}