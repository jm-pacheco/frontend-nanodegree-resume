/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("jmpacheco");

var email = "myemail@gmail.com";
var newemail = email.replace("myemail" , "newemail");

console.log(email);
console.log(newemail);

var awesomeThoughts = "I am someone and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun");

//$("#main").append(funThoughts);
var name = "someone";
var role = "software engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var astring = "audacity";
var astringconverted = astring[1].toUpperCase() + astring.slice(2);
console.log(astring + " -> " + astringconverted);

