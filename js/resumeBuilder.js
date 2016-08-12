/**
 * Udacity
 *
 */

/**
 * Replaces the placeholder %data% in tag with value
 * @param tag a string value with a  %data% placeholder
 * @param value to be replaced in tag
 * @aparm optional link to replace the '#' placeholder a '<a href="#" ...' tag
 * @returns {XML|string|void}
 */
function replaceData (tag, value, link) {
    var ret = tag.replace("%data%", value);
    if (typeof link !== 'undefined') {
        ret = ret.replace('#', link);
    }
    return ret;
}


/**
 * Personal details
 */

var bio = {
    "name" : "Luis Miguel Serrano",
    "role" : "Software Engineer",
    "contacts": {
        "mobile": "N/A",
        "email": "LMSSerrano@gmail.com",
        "github": "lmserrano",
        "twitter": "@LuisMigSerrano",
        "blog": "https://plus.google.com/u/0/+LuisMiguelSerrano/posts",
        "location": "Lisbon, Portugal"
    },
    "welcomeMessage": "Welcome to my resume (last updated: 10th August 2016)",
    "skills": [ "Java SE", "Android", "Spring Framework", "Javascript", "SQL", "NOSQL Databases"],
    "biopic": "images/fry.jpg",

    display: function () {
        var header = $("#header");

        header.prepend(replaceData(HTMLheaderRole, bio.role));
        header.prepend(replaceData(HTMLheaderName, bio.name));
        header.append(replaceData(HTMLwelcomeMsg, bio.welcomeMessage))
        header.append(replaceData(HTMLbioPic, bio.biopic))
        header.append(HTMLskillsStart);
        for (var i=0; i<bio.skills.length; i++) {
            header.append(replaceData(HTMLskills, bio.skills[i]))
        }

        var topContacts = $("#topContacts");
        topContacts.append(replaceData(HTMLmobile, bio.contacts.mobile));
        topContacts.append(replaceData(HTMLemail, bio.contacts.email));
        topContacts.append(replaceData(HTMLgithub, bio.contacts.github));
        topContacts.append(replaceData(HTMLtwitter, bio.contacts.twitter));
        topContacts.append(replaceData(HTMLlocation, bio.contacts.location));

        var footerContacts = $("#footerContacts");
        footerContacts.append(replaceData(HTMLmobile, bio.contacts.mobile));
        footerContacts.append(replaceData(HTMLemail, bio.contacts.email));
        footerContacts.append(replaceData(HTMLgithub, bio.contacts.github));
        footerContacts.append(replaceData(HTMLtwitter, bio.contacts.twitter));
        footerContacts.append(replaceData(HTMLlocation, bio.contacts.location));

    }
};


/**
 * Details of education
 */
var education = {
    "schools": [
        {
            "name": "ISCTE-IUL Lisbon University Institute",
            "location": "Lisbon, Portugal",
            "degree": "Degree on Telecommunications and Computer Science Engineering",
            "majors": ["Information Technology"],
            "dates": "2006 - 2009",
            "url": "http://www.iscte-iul.pt/en/home.aspx"
        },
        {
            name: "ISCTE-IUL Lisbon University Institute",
            "location": "Lisbon, Portugal",
            "degree": "Master's Degree on Telecommunications and Computer Science Engineering",
            "majors": "Information Technology",
            "dates": "2009 - 2011",
            "url": "http://www.iscte-iul.pt/en/home.aspx"
        }
    ],

    displaySchools: function () {
        var tag = $("#education");
        tag.append(HTMLschoolStart);
        tag = $(".education-entry:last");
        for (var i=0; i<education.schools.length; i++) {
            (function(school) {
                tag.append(replaceData(HTMLschoolName, school.name, school.url));
                tag.append(replaceData(HTMLschoolDegree, school.degree));
                tag.append(replaceData(HTMLschoolDates, school.dates));
                tag.append(replaceData(HTMLschoolLocation, school.location));
                tag.append(replaceData(HTMLschoolMajor, school.majors));
            })(education.schools[i]);
        }

    },

    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": "2016",
            "url": "https://classroom.udacity.com/courses/ud804/lessons/1946788554/concepts/25505685350923#",
            "description": "Udacity JavaScript Basics course",
            "diploma": "N/A"
        }
    ],

    displayOnlineCourses: function () {
        var tag = $("#education");
        tag.append(HTMLonlineClasses);
        tag.append(HTMLschoolStart);
        tag = $(".education-entry:last");
        for (var i=0; i<education.onlineCourses.length; i++) {
            (function(course) {
                tag.append(replaceData(HTMLonlineTitle, course.title, course.url));
                tag.append(replaceData(HTMLonlineSchool, course.school));
                tag.append(replaceData(HTMLonlineDates, course.date));
                tag.append(replaceData(HTMLonlineURL, course.description, course.diploma));
            })(education.onlineCourses[i])
        }
    },

    display: function() {
        education.displaySchools();
        education.displayOnlineCourses();
    }
};


/**
 * Details of employment
 */

var work = {

    "jobs": [
        {
            "employer": "BOLD International",
            "url": "http://www.boldint.com/",
            "title": "IT Consultant",
            "location": "Lisbon, PT",
            "dates": "May 2015 - current",
            "description": "Software Development for different clients"
        },
        {
            "employer": "Misc Projects",
            "url": "N/A",
            "title": "Software Engineer",
            "location": "Lisbon, PT",
            "dates": "November 2014 - May 2015",
            "description": "Miscellaneous projects"
        },
        {
            "employer": "Warpbox Solutions",
            "url": "N/A",
            "title": "Co-Founder and CTO",
            "location": "Lisbon, PT",
            "dates": "August 2013 - November 2014",
            "description": "Architecture and planning of systems and applications, client-side and server-side development, databases, tools, games, etc. " +
                "Company Documentation. " +
                "Game designer"
        },

        {
            "employer": "BOLD International",
            "url": "http://www.boldint.com/",
            "title": "IT Consultant",
            "location": "Lisbon, PT",
            "dates": "August 2011 - August 2013",
            "description": "Web App development in Java (Java EE) and Ruby, using Google App Engine, Tomcat, nginx and Apache. " +
            "Software development for Windows 7 (Desktop) in C#. " +
            "Mobile Software development for Android platform."
        },
    ],

    display: function() {
        var tag = $("#workExperience");
        tag.append(HTMLworkStart);
        tag = $(".work-entry:last");
        for (var i=0; i<work.jobs.length; i++) {
            (function(job) {
                tag.append(replaceData(HTMLworkEmployer, job.employer, job.url));
                tag.append(replaceData(HTMLworkTitle, job.title));
                tag.append(replaceData(HTMLworkDates, job.dates));
                tag.append(replaceData(HTMLworkLocation, job.location));
                tag.append(replaceData(HTMLworkDescription, job.description));
            })(work.jobs[i])
        }
    }
};



/**
 * Details of projects
 */
var proj = {
    "projects": [
        {
            "title": "Web Application for BOLD International's Client",
            "dates": "March 2016 - Present",
            "objective": "Help developing client's products",
            "description": "Take part in the development of a platform for the company's products and the core product itself",
            "images": ["https://c1.staticflickr.com/1/52/146865077_450add2821_z.jpg?zz=1"],
            "url": "https://www.google.com"
        },
        {
            "title": "Miscellaneous projects for Internal BOLD Teams and BOLD Clients",
            "dates": "March 2015 - March 2016",
            "objective": "Implement internal projects for the company and work on the development of new or existing solutions for BOLD clients",
            "description": "Android Mobile social game, Java server components, miscellaneous configurations",
            "images": ["https://pixabay.com/static/uploads/photo/2014/12/30/13/44/programming-583923_960_720.jpg"],
            "url": "https://www.google.com"
        },
        {
            "title": "PC Board Logic Analyzer",
            "dates": "November 2011 - August 2013",
            "objective": "Telecommunication Operators Network Quality and Usage Analysis Software (Windows PC Client & Server Components)",
            "description": "Development and integration of new server modules and components into the system's architecture and its data processing workflow. Windows PC Client as proof of concept and product.",
            "images": ["https://upload.wikimedia.org/wikipedia/commons/3/39/C_Hello_World_Program.png"],
            "url": "https://www.google.com"
        }
    ],

    display: function () {
        var tag = $("#projects");
        tag.append(HTMLprojectStart);
        tag = $(".project-entry:last");
        for (var i=0; i<proj.projects.length; i++) {
            (function(project) {
                tag.append(replaceData(HTMLprojectTitle, project.title, project.url));
                tag.append(replaceData(HTMLprojectDates, project.dates));
                tag.append(replaceData(HTMLprojectObjective, project.objective))
                    .append(replaceData(HTMLprojectDescription, project.description));
                tag.append(replaceData(HTMLprojectImage, project.images));
            })(proj.projects[i])
        }
    }
};



/**
 * Convert the name to internationalized form on click.
 */
function inName(name) {
    name = bio.name;
    var firstName = name.substr(0,1).toUpperCase() + name.substr(1, name.indexOf(" ")-1).toLowerCase();
    var lastName = name.substr(name.lastIndexOf(" ") + 1).toUpperCase();
    finalName = firstName + " " + lastName;
    console.log("OUT  "  + name);
    return finalName;
}


/**
 * Display click location on the console
 */

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
} );


/**
 * Display the data of the various resume parts.
 */
bio.display();
education.display();
work.display();
proj.display();


/*
 * And finally display the 'Where I've Lived and Worked' map and the internationalize button
 */
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);



