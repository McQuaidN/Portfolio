FUN_FACTS = [
    " with a passion for fighting games",
    " with a love for bad puns",
    " who loves python",
    " who plays Snake in Smash Bros",
    " who likes Java and C#",
    " who makes games",
    " with a diploma from Durham College",
    " who wants to join your team",
    " who runs video game tournaments",
    " who was on the honour roll",
    " who exclusively uses dark mode",
    " whose favourite colour is black",
    " who started coding in high school",
    " who's been a pizza chef",
    " who loves indian food",
    " who is half british"
]; // Values in marquee

let navbar = document.getElementById("navbar"); // easy way to have a persistent navbar across pagess

// I saw this on a portfolio website and decided to remake it myself.
// Not very necessary but it shows that I can code I guess
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

AboutPage();

function AboutPage(){
    shuffle(FUN_FACTS)
    var update = setInterval(updateText, 3000); // set text to different fun facts

    x = 0;


    // randomly chooses fun facts.
    function updateText(){

        $(document.getElementById("additional")).fadeToggle("100ms", "linear", function(){
            document.getElementById("additional").textContent = FUN_FACTS[x];
        })
        $(document.getElementById("additional")).fadeToggle("100ms", "linear")
        if(x === FUN_FACTS.length - 1){
            FUN_FACTS = shuffle(FUN_FACTS);
            x = 0;
        }else{
            x+= 1;
        }
    }

    nathan.addWorkExperience("Near future", "Junior Developer/Intern at your company", "I am actively seeking job opportunities in tech!")

    for (i = 0; i < nathan.workExperience.length; i++){
        // Automatically pulls data from my class and populates the table
        // This makes the code much more maintainable... sounds very hireable tbh...

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

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }