console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
printOdds(100);
function printOdds(count){
    if(count <=0){
        console.log("Number can not be negative.")
    }
    for(let i = 1; i < count; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
// Exercise 2 Section 
console.log("EXERCISE 2:\n==========\n");
checkAge(18);
function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}
// Exercise 3 Section 
console.log("EXERCISE 3:\n==========\n");
whichQuadrant(5, -1);
function whichQuadrant(x, y){
    if (x >0 && y > 0){
        console.log(`your point is in quadrant 1`)
    }
    else if (x < 0 && y > 1){
        console.log(`your point is in quadrant 2`)
    }
    else if (x < 0 && y < 0){
        console.log(`your point is in quadrant 3`)
    }
    else if (x > 0 && y < 0){
        console.log(`your point is in quadrant 4`)
    }
    else if (x == 0 && y != 0){
        console.log(`your point is on the x axis`)
    }
    else if (y == 0 && x != 0){
        console.log(`your point is on the y axis`)
    }
    else{
        console.log(`your point is at the origin`)
    }
}
// Exercise 4 Section 
console.log("EXERCISE 4:\n==========\n");
isTriangle(2, 3, 4);
function isTriangle(s1, s2, s3){
    if (s1 == null || s2 == null || s3 == null){
        console.log("invalid input")
    }
    else if (s1 + s2 <= s3 || s1 + s3 <=  s2 || s2 + s3 <= s1){
        console.log("Invalid triangle.")
    }
    else if(s1 == s2 && s2 == s3 && s3 == s1){
        console.log("Equilateral triangle.")
    }
    else if(s1 == s2 && s2 != s3 || s2 == s3 && s3 != s1 || s1 == s3 && s3 != s2){
        console.log("Isosceles triangle.")
    }
    else{
        console.log("Scalene triangle")
    }
}
// Exercise 5 Section 
console.log("EXERCISE 5:\n==========\n");

