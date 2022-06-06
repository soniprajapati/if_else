// People 5 years and above in age can go to school.

// People 18 years and above in age can vote in elections.

// People 21 years and above in age can drive a car.

// People 24 years and above in age can marry.

// People 25 years and above in age can legally drink.


let a=require("readline-sync")
age=a.question("enter your age:")

if (age>=25){
    console.log("you legally drink")
}

else if(age>=21){
    console.log("you can drive the car")
}

else if(age>=18){
    console.log("you can vote  in election")
}

else if(age>=5){
    console.log("you can go to school")
}