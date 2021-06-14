// Building a love calculator using random number generator, conditional statments, & combining comparitors e.g., &&, >=, etc. 

// the ojbective is to input your name, then your crush's name, and then through a process of complicated math, you would arrive at some random percentage, that dictates how well matched these two people were. 

// spoiler alert!
// this is not an actual love calculator is a way to generate random numbers to satisfy somones need to predict the future. 

// many game developers rely on random generator in there code. you can also do this in .js by simply using Math.random(); function to generate random numbers. 

// the random generator is a 16 digit number that never reaches 1. for example, if you output a random number it will always be a variations of numbers betweeen 0 - 0.9999999999999999.

//////////  Example  ///////// 

// Say we were trying to simulate a dice roll.
// we have 6 sides, so thats 6 possibilities.
// How can we take the random generator and turn it into numbers between 1-6?
// first we multiply it by 6... 
// n = n * 6; and we get...  2.188422964779.
// second we perform Math.floor to round down to nearest whole number... 
// n is used as an input to the function Math.floor.
// n = Math.floor(n); and we get... 2.
// Now we get a whole number that is useful to give back to the user. 

//////////////////////// the complete dice roll script below ///////////////////////// 


// var n = Math.random();    // random number function generator. with console.log we get 0 - 0.9999999999999999.
// n = n * 6;               // this is scaling our random number to our desired range of 1 - 6 but its actually a range of 0 - 5.
// n = Math.floor(n) + 1;  // rounds the numbers and the plus 1 will scale it, 0 - 5 + 1 and we now get a range of 1 - 6.
// console.log(n);        // is a function used to print any variables defined before it or to displaya message to the user. 

//  ultimatly this is a pseudo random number generator. computers are comprised of billion of on & off swiches, and its a completely  deterministic process. Throughout history peopl have tried to come up with many mathimatical formulas to get a non-random computer to generate of what looks like or appears to be, at least statistically, random numbers. 


///////////////////////  Challage: Create a love Calculator //////////////////////////////

///////// Instructional Steps //////////

// Should have two prompts that ask for the names of the two people.
// Then create a random number that is a percentage. 
// Should generate a number between 1 - 100. 
// Give the final information to the user as an alert, gving them there love score. 


//////////////////////////////// The Love Calculator /////////////////////////////////////////////////


prompt("What is your name?");
prompt("What is their name?");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1; // 1-100

if (lovescore > 70) {
  alert("Your love score is " + lovescore + "%" + " You're love is everlasting.");
} 
if (lovescore > 30 &&  lovescore <= 70){
  alert("Your love score is " + lovescore + "%");  
}
if (lovescore <= 30){
  alert("Your love score is " + lovescore + "%" + " You go together like oil and water.");  
}


//////////////////////////////// Second Iteration  /////////////////////////////////////////////////


prompt("What is your name?");
prompt("What is their name?");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
alert("Your love score is " + lovescore + "%");
