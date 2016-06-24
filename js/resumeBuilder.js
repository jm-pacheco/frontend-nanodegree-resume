/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "someone",
    "age" : "20",
    "role" : "software engineer",
    "skills": ["hardworker", "awesomeness", "Engineer"],
    "contact" : {
        "mobile": "666-666-666",
        "email": "someone@gmail.com"
    },
    "bioPic" : "images/goku.jpg",
    "welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc."
};

var work = {
    "jobs" : [  
    {
        "position" : "Engineer",
        "years" : "40",
        "city" : "Madrid"
    }
    ]
};

var education = {
    "schools": [
    {
     "name" : "Street School",
     "degree" : "Engineer",
     "years" : "10",
     "city" : "Madrid"
    },
    {
     "name" : "City School",
     "years" : "10",
     "degree" : "Basic Studies",
     "city" : "Madrid"
    }
  ],
  "onlineCourser": [
  {
     "title": "JavaScript",
     "school": "Udacity",
     "dates": 2016,
  }

]
}

var projects = {
    "projects": [
    {
        "title": "Builder",
        "dates":"2014",
        "description": "Build houses"
    }
    ]
};

$("#main").append(bio.age);
$("#main").append(bio.skills.join(" "));
$("#main").append(bio.picture);
$("#main").append(bio.welcomeMessage);

$("#main").append(work.position);
$("#main").append(education.name);



