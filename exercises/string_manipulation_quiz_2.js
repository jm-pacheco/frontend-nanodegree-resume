var name = "AlbERt EINstEiN";

function capitalize(str) {
    var s = str;
    s = s[0].toUpperCase() + s.slice(1).toLowerCase();
    return s;
    
}

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var tokens = finalName.split(" ");
    var firstName = tokens[0];
    var lastName = tokens[1];
    
    firstName = capitalize(firstName);
    lastName = lastName.toUpperCase();
    
    finalName = firstName + " " + lastName;

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
