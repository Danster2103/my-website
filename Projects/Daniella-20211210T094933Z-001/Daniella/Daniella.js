var score = 0;

alert("LETS'S QUIZ! ");
alert("UPPERCASE ONLY!");
alert("NO LOWERCASE, SYMBOLS AND NUMBERS ALLOWED!");



var question = [
    {
        prompt: "It is a Computer language that is used to devised to allow website creation ",
        answer: "HTML"
    },
    {
        prompt: "It is A simple mechanism for adding style to Web documents",
        answer: "CSS"
    },
    {
        prompt: "It is a Computer language that is used for web page enhancement",
        answer: "JAVASCRIPT"
    },
    {
        prompt: "It is a special variables which can hold more than one value at a time and is treated as a single unit",
        answer: "ARRAYS"
    },
    {
        prompt: "It shows the flow of control represented in programs",
        answer: "FLOWCHARTS"
    }
]


for(var i=0; i < question.length; i++){
    var response = window.prompt(question[i].prompt);
    if(response == question[i].answer){
        score++;
        alert("Correct, Right, Perfect!");
    } else{
        alert("Wrong, mali, ginagawa mue!");
    } 
     
}

message = `<h1> You Got: ${score} correct answers out of 5 questions <h1> `

document.write(message);

if (score == 5){
    document.write("Crown earned: Gold! Very Good!")
} else if (score >= 3){
    document.write("Crown earned: Silver! Good Job!")
} else if (score >= 1){
    document.write("Crown earned: Bronze! Nice Try!")
} else{
    document.write("Crown earned: Itlog! Try again, Next time!")
}