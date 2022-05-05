let a = 10;
/* Value of 10 */

console.log(a);
/* Pringting the value of a */





console.log(Math.floor(Math.random() * 100))
/* Generating random integer (element "* 100" making it a full number instead of decimal) */

console.log("Andrej Dimitrievski")

// Global Variable
let lname = "Dimitrievski"
let age = 23;

// Global Constant
const height = "180cm";

function Firstname(firstname, lastname) { //start of blockscope
    //local variable
    let fname = firstname;
    let lname = lastname;

    console.log(fname + " " + lname);
} //end of blockscope

function Lastname() {
    console.log(lname);
    
}

function bio(){
    // Local Variable
    let fname = "Andrej";
    
    age++;

    

    console.log(fname + " " + lname + " " + "Age:" + age + " " + "Height:" + height)
}
//This line of code is calling the first name
Firstname("Andrej", "Dimitrievski");
//This line of code is calling the first name
Lastname();

bio();
bio();