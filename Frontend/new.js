// Print statement
console.log("SRIT");

// Data types in JS
let num = 12;                     
let str = "hi";                   
let bol = true;                   
let bigint = 9581324940987654n;   
let unde;                         
let emptyVal = null;              

console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bol);
console.log("BigInt:", bigint);
console.log("Undefined:", unde);
console.log("Null:", emptyVal);

// var, let, const usage
var name1 = "srit";
console.log("var name1:", name1);

var name1 = "hi";   // var can be redeclared
console.log("var redeclared name1:", name1);

let course = "cse";
let age = 20;
console.log("Course:", course);
console.log("Age:", age);

const givename = "Srinivasa RIT";
console.log("Givename:", givename);

// ✅ New student details
let studentName = "N.Megha Suvarchala";
let rollNo = "234g1a3388";
let email = "meghasuvarchala@gmail.com";

console.log("Student Name:", studentName);
console.log("Roll Number:", rollNo);
console.log("Email:", email);

// Functions
function generateWelcomeMessage(name, rollno, email) {
    return `Welcome, ${name}! 🎉\nRoll No: ${rollno}\nEmail: ${email}\nGood Morning!`;
}

// Using the function
let welcome_message = generateWelcomeMessage(studentName, rollNo, email);

console.log("\n--- Welcome Message ---");
console.log(welcome_message);

// Age operations
let addage = age + 3;
let subage = age - 4;
let mulage = age * 5;
let divage = age / 2;


console.log(addage);
console.log(subage);
console.log(mulage);
console.log(divage);

// Rectangle functions
function area(len, wid) {
    return len * wid;
}

function perimeter(len, wid) {
    return 2 * (len + wid);
}

// ✅ Rectangle dimensions
let length = 12;
let width = 6;

console.log(length);
console.log(width);

let getarea = area(length, width);
let getperimeter = perimeter(length, width);

console.log("Area of rectangle =", getarea);
console.log("Perimeter of rectangle =", getperimeter);

function fact(n){
    if(n==0){
    }
    else{
        return n*fact(n-1)
    }
}
    let f=fact(4);
    console.log(f)



//calculate compoundinterest
function compoundinterest(p,r,t){
    return p*(Math.pow((1+r/100),t));
}
let ci=compoundinterest(10000,10,2);
console.log("compound interest is : ",ci)
  

//calculate simple interest
function simpleinterest(p,r,t){
    return(p*r*t)/100;

}
 let si=simpleinterest(10000,10,2);
 console.log("simple interest is : ",si)


 if(age>18){
    console.log("eligible to vote");

 }
  
 age = 21
 if (age>=18){
    console.log("you are eligible")
 }else {
    console.log("you are not eligible")
 }
    
 let number  =5;
 if(number%2==0){
    console.log("even number");

 }

 //calculator using if conditions
let n1=20;
let n2=10;
let operator="+";
if(operator=="+"){  
    console.log("addition is : ",n1+n2)
}else if(operator=="-"){
    console.log("subtraction is : ",n1-n2)
}else if(operator=="*"){
    console.log("multiplication is : ",n1*n2)
}else if(operator=="/"){    
    console.log("division is : ",n1/n2)
}else if(operator=="%"){
    console.log("modulus is : ",n1%n2)
}else{
    console.log("invalid operator")
}

//student grade
let marks=85;   
if(marks>=90){
    console.log("A grade")
}   else if(marks>=80){
    console.log("B grade")
}   else if(marks>=70){
    console.log("C grade")
}   else if(marks>=60){
    console.log("D grade")
} else{
    console.log("F grade")
}
  
//a person is travelling from A to B at a speed of 30km/hr speed double for every 10min .if the distance between A and B max speed is 120km and is travel 96 min.
let initialSpeed = 30; // km/h
let maxSpeed = 120;    // km/h
let totalTime = 96;    // minutes
let speed = initialSpeed;
let distance = 0;

let timeElapsed = 0;

while (timeElapsed < totalTime) {
    let remainingTime = totalTime - timeElapsed;
    let interval = Math.min(10, remainingTime);
    distance += speed * (interval / 60);
    speed = Math.min(speed * 2, maxSpeed)
    timeElapsed += interval;
}

console.log("Total distance traveled:", distance, "km");


// b=30 for kms
//for the next 5km the price is 10
//for the next 10km the price is 15
//for more than 19km the price is 20 per km
//fare calculation

function calculateFare(distance) {
    let fare = 0;

    if (distance <= 4) {
        fare = 30; // flat rate for first 4 km
    } else if (distance <= 9) {
        fare = 30 + 10; // 4 km base + next 5 km
    } else if (distance <= 19) {
        fare = 30 + 10 + 15; // base + next 5 km + next 10 km
    } else {
        // More than 19 km
        fare = 30 + 10 + 15; // base up to 19 km
        fare += (distance - 19) * 20; // extra km at 20 per km
    }

    return fare;
}

// ✅ Test with multiple distances without redeclaration
let testDistances = [3, 7, 15, 19.5, 25];

for (let d of testDistances) {
    console.log(`Distance: ${d} km -> Total fare: ₹${calculateFare(d)}`);
}


//print 5 table using while loop
let k= 1;
while(k<=10){
    console.log(k*5);
    k++;
}

//dom manipulations


//select an element
const myDiv = document.geteElementById('myDiv');

//change content
myDiv.textcontent = "Hello, world!";

//add a class
myDiv.classList.add('highlight');

//create a new pararaph and append it
const newparagraph = document.createElement('p');
newparagraph.textcontent = 'this is a new paragraph';
myDiv.appendchild(newparagraph);

//add an event listener
myDiv.addEventListener('click',() =>{
    alert('Div Clicked!');
});



