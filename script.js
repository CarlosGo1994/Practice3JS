'use strict'

//Test with Let and var


//Testing with VAR
/*With var you are defining a global variabe*/

var number = 40;
console.log(number); //Value 40


if(true){
    var number = 50;
    console.log(number);//value 50
}

console.log(number);// value 50

//Testing with LET
/*With Let you can define variables limiting the block of code where you want to use them*/

var text = "Course JS Carlos Gomez";
console.log(text);//Value Carlos

if (true){
    let text = "Course JS Omar Gomez";
    console.log(text)//Value Omar
}

console.log(text);//Value Carlos

