var myName = "Ben";
var favNum = 3;
var lovesCode = true;
var sentence = ("my name is" + " " + myname + " " + "and my favorite number is" + " " + favNum);
var truFavNum;
trueFavNum == favNum;
console.log(trueFavNum);

// #6 Create a new variable called notHakeem. Using the previously created myName variable, test that your
// name DOES NOT equal the string 'Hakeem Olajuwon'. 

// CODE HERE
var notHakeem = "Hakeem Olajuwon";
var nameRight;
if (myname != notHakeem){
   nameRight = true;
}else {
  nameRight = false;
}

var age = 18;
var canDrive;

if (age>=16){
canDrive = true
}else {
  canDrive = false
};

// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value based off of a passed in value. 
// The param value passed in will be added in the unit test. If the param value is 'green' set colorResponse variable to 'Green is okay'. If the param value is 
// 'red' set reponse variable to 'I heart red'. Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse 
// variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  // CODE HERE
  if (param=='green'){
    colorResponse("Green is okay")
  }else if(param=='red'){
    colorResponse("I heart red")
  }else {
    colorResponse("What is your favorite color")
    
  };
  return colorResponse;
}

// #9 Create a function called 'sum' that takes in one parameter and returns the sum of that parameter added 
//it itself.

// CODE HERE
function sum(num1){
  return num1++
};
console.log sum(8);
// #10 Create a function called 'greeter' that takes in two parameters, name and number. Have 'greeter' 
//return a string that says something like this 'Hi! 
//I am Bryan and I am 28 years old" but with the appropriate values..
// CODE HERE
function greeter(name,number){
return "greeter"
};
greater("I am Bryan"," and I am 28 years old")