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
        "employer" : "World Company",
        "title" : "Engineer",
        "years" : "2013-2014",
        "city" : "Madrid",
        "description": "Development"
    },
    {
        "employer" : "Universe Company",
        "title" : "Engineer",
        "years" : "2015-2016",
        "city" : "Chicago",
        "description" : "Management"
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
     "dates": "2016"
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

//$("#main").append(bio.age);
//$("#main").append(bio.skills.join(" "));
//$("#main").append(bio.picture);
//$("#main").append(bio.welcomeMessage);

//$("#main").append(work.position);
//$("#main").append(education.name);

console.log(bio.name + " " + bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0){
    console.log("There are skills:" + bio.skills.join(" "));
    $("#header").append(HTMLskillsStart);
    for (skillIdx in bio.skills){
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skillIdx]));
    }
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);


    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
    $(".work-entry:last").append(formattedDates);

    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDesc);

}

