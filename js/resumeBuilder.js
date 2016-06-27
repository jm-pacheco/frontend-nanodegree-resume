/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name" : "someone funny",
    "age" : "20",
    "role" : "software engineer",
    "skills": ["hardworker", "awesomeness", "Engineer"],
    "contacts" : {
        "mobile": "666-666-666",
        "email": "someone@gmail.com",
        "github": "someone",
        "twitter": "@someone",
        "location": "Sydney"
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
        "location" : "Madrid",
        "description": "Development"
    },
    {
        "employer" : "Universe Company",
        "title" : "Engineer",
        "years" : "2015-2016",
        "location" : "Chicago",
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
     "location" : "Madrid"
    },
    {
     "name" : "City School",
     "years" : "10",
     "degree" : "Basic Studies",
     "location" : "Madrid"
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

var displayHeader = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#header").append(HTMLlocation.replace("%data%", bio.contacts['location']));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));




    if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        for (skillIdx in bio.skills){
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skillIdx]));
        }
    }
}

function displayWork() {

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

}


displayHeader();
displayWork();



function inName(name) {
    var finalName = name;

    var tokens = finalName.trim().split(" ");
    var firstName = tokens[0].slice(0,1).toUpperCase() + tokens[0].slice(1).toLowerCase();
    var lastName = tokens[1].toUpperCase();

    finalName = firstName + " " + lastName;

    // Don't delete this line!
    return finalName;
};

projects.display = function(){
    $("#projects").append(HTMLprojectStart);

    for (project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        }
}

projects.display();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);




