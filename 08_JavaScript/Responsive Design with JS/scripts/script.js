
// Student Name: Andrej Dimitrievski
// File name script.js
// Date:14.04.2022



// // var videoSource = document.getElementById("vid-src");
// // var video = document.getElementById("example");
// // var descriptionSource = document.getElementById("despsrc");



// //Hamburger Menu function
// function hamburger() {
//     var menu = document.getElementById("menu-links");
//     var logo = document.getElementById("ffc-logo");
//     if (menu.style.display === "block"  && logo.style.display === "none") { 
//         menu.style.display = "none";
//         logo.style.display = "block";  
//     } else {
//         menu.style.display = "block"
//         logo.style.display = "none"  
//     }}

// function discount(){
//     console.log("discount console.log");
// }

// //Function to display a promo code
// function discount(){
//     var promo = document.getElementById ("special") ;
//     promo.firstChild.nodeValue = "Promo Code: D25START"
//     promo.style.color = "#ff0000"
//     promo.style.fontSize = "2em"
    
// }

// // Function to display plank video
// function plank() {
//     videoSource.src = "./media/plank.mp4";
//     // descriptionSource.src = "media/plankdescriptions.vtt"; 
//     video.style.display = "block";
//     video.load();
// }

// // Function to display burpees video

// function burpees() {
    
// }












//Global Variables

var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");
video.style.height = "5oopx"
video.style.width = "300px"

// Function to display burpees video

function burpees() {
    videoSource.src = "./media/burpees.mp4";
    video.style.display = "block";
    video.load();
   
}

function climbers() {
    videoSource.src = "./media/climbers.mp4";
    video.style.display = "block";
    video.load();
   
}

// Function to display plank video
 function plank() {
     videoSource.src = "./media/plank.mp4";
     // descriptionSource.src = "media/plankdescriptions.vtt"; 
     video.style.display = "block";
     video.load();
 }
