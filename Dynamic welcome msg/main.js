let body = document.body;
let newElement = document.createElement("h1");
let date = new Date();
let curr = date.getHours();
console.log(curr);
let dynText;
if(curr >= 4 && curr <= 10){
    dynText = "Good morning!";
} else if(curr > 10 && curr <= 12){
    dynText = "Good Day!";
} else if(curr > 12 && curr <= 16){
    dynText = "Good Afternoon!";
} else if(curr > 16 && curr <= 22){
    dynText = "Good Evening!";
} else if(curr > 22 && curr < 4){
    dynText = "Good Night!";
} else{
    dynText = "Are u an alien?";
}

newElement.append(dynText);
body.appendChild(newElement);

newElement.setAttribute("class","newmsg")

document.querySelector(".newmsg").style.cssText = "font-size: 40px; color : red; text-align: center;";