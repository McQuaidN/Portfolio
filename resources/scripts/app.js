const FUN_FACTS = [
    " with a passion for fighting games",
    " with a love for bad puns",
    " who loves python",
    " who plays Snake in Smash Bros",
    " who likes Java and C#",
    " who makes games",
    " with a diploma from Durham College",
    " who wants to join your team"
]; // Values in marquee

let navbar = document.getElementById("navbar"); // easy way to have a persistent navbar across pages

navbar.innerHTML = "<ul class=\"navbar\"><li class=\"navbar\"><a class=\"navbar\" href=\"index.html\">Home</a></li><li class=\"navbar\"><a class=\"navbar\" href=\"portfolio.html\">Portfolio</a></li><li class=\"navbar\"><a class=\"navbar\" href=\"contact.html\">Contact</a></li></ul>";

// I saw this on a portfolio website and decided to remake it myself.
// Not very necessary but it shows that I can code
class Nathan{
    // Attributes
    firstName = "";
    lastName = "";
    email = "";
    workExperience = []
    education = []
    GPA = 0;

    // Constructor
    constructor(){
        this.firstName = "Nathan";
        this.lastName = "McQuaid";
        this.email = "NathanMcQuaid1996@gmail.com";
        this.workExperience.push(["2015-2016", "FQA Tester at Babel Media", "Video game tester for an outsourcer."]);
        this.workExperience.push(["2016-now", "Line/Prep Cook at several GTA restaurants", "Cooking for a living while trying to save to go back to college."]);
        this.education.push({"Computer Programming": "Durham College, Class of 2023"});
        this.GPA = 3.8;
    }

    // Methods
    addWorkExperience(dateRange, title, desc){
        this.workExperience.push([dateRange, title, desc])
    }

    workHard(){
        return "I do this!";
    }
}

const nathan = new Nathan(); // instantiate me

// different things to do on different pages
switch(document.title){
    case "About":
        AboutPage();
}

// special about page functions
function AboutPage(){
    var update = setInterval(updateText, 5000); // set text to different fun facts
    var lastx = 0;

    // randomly chooses fun facts.
    function updateText(){
        let x = Math.floor((Math.random() * FUN_FACTS.length));
        if (x === lastx){
            x = Math.floor((Math.random() * FUN_FACTS.length)); 
            // to prevent 2 identical numbers in a row. Won't always work but makes it significantly rarer.
        }
        document.getElementById("additional").textContent = FUN_FACTS[x];
    }

    nathan.addWorkExperience("Near future", "Junior Developer/Intern at your company", "I am actively seeking job opportunities in tech!")

    for (i = 0; i < nathan.workExperience.length; i++){
        // Automatically pulls data from my class file and populates the table
        // This makes the code much more maintainable

        let table = document.getElementById("experienceTable");
        let row = document.createElement("tr");
        let dateRange = document.createElement("td");
        let title = document.createElement("td");
        let description = document.createElement("td");

        dateRange.innerText = nathan.workExperience[i][0];
        title.innerText = nathan.workExperience[i][1];
        description.innerText = nathan.workExperience[i][2];

        table.appendChild(row);
        row.appendChild(dateRange);
        row.appendChild(title);
        row.appendChild(description);
    }

    for (i = 0; i < nathan.education.length; i++){
        // Same deal for education

        let table = document.getElementById("educationTable");
        let row = document.createElement("tr");
        let program = document.createElement("td");
        let school = document.createElement("td");
        let gpa = document.createElement("td");

        // I formatted this strangely, so I need to format the code strangely.
        // A little more complex. but stays easily maintainable!
        program.innerText = Object.keys(nathan.education[i]);
        school.innerText = nathan.education[i][Object.keys(nathan.education[i])];
        gpa.innerText = nathan.GPA + " GPA";

        table.appendChild(row);
        row.appendChild(program);
        row.appendChild(school);
        row.appendChild(gpa);
    }
}