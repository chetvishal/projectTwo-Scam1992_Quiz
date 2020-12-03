var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0; //variable storing score

console.log(chalk.green('lets see how well you know about web series scam 1992'));

var userName = readlineSync.question('Please enter your name: ');

//function to run questions
function play(question) {

    console.log(`\n` + question.question);
    console.log("Your options are:- ");

    //loop to loop through options of questions
    for (var i = 0; i < 4; i++) {
        console.log(`[${i + 1}].`, question.options[i])
    }
    var userAns = readlineSync.question(`Enter correct option: `);

    if (userAns < 5) {//to check valid option

        if (userAns === question.answer) {
            score = score + 1;
            console.log(chalk.green("Correct!"))
        }

        else {
            console.log(chalk.red("Wrong!"))
        }

    }
    else {
        console.log(chalk.red("Please enter valid options no!"))
    }
    console.log("Your score: " + chalk.green(score));
}

var questions = [
    {
        question: "whats Harshad Mehta's Brother's name?",
        options: ["Ashwin", "Virat", "Ashish", "Ashwini"],
        answer: "1"
    },
    {
        question: "which reporter was after Harshad Mehta?",
        options: ["Sucheta Dalal", "Anjana Omkashyap", "Arnab Goswami", "Rajat Sharma"],
        answer: "1"
    },
    {
        question: "From which bank did Harshad Mehta took money?",
        options: ["axis bank", "PNB", "citi bank", "SBI"],
        answer: "1"
    },
    {
        question: "who was then current RBI Governer?",
        options: ["Arjit Patel", "S.Venkitaramanan", "Raghuram Rajan", "Manmohan Singh"],
        answer: "2"
    },
    {
        question: "For which newspaper did Sucheta Dalal Worked for?",
        options: ["Delhi Times", "Saamana", "Times of India", "Hindustan Times"],
        answer: "3"
    }
]

var otherPlayers = [
    {
        name: "daring bhai",
        score: 3
    },
    {
        name: "sallu bhai",
        score: 4
    }
]

for (var i = 0; i < questions.length; i++) {
    play(questions[i]);
}

otherPlayers.push({ name: userName, score: score });

console.log("\n********** SCORES OF OTHER PLAYERS **********")
for (var i = 0; i < otherPlayers.length; i++) {
    console.log('\nname:', otherPlayers[i].name);
    console.log('score:', chalk.green(otherPlayers[i].score));
}
