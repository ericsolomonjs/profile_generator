const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
let i = 0;
const questions = [
  'What\'s your name? Nicknames are also acceptable \:)',
  'What\'s an activity you like doing?',
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg\: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!'
  ]

const asyncQuestion = function(question, counter, nextFn) {
  
  rl.question(question, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    answers[counter] = answer;
    counter++;
    
    if (questions[counter] !== undefined) {
      console.log('next iteration: ' + counter);
      nextFn(questions[counter], counter, nextFn);
      
    } else {
      rl.close();
      console.log(`Hi my name is ${answers[0]}! I like ${answers[1]} while listening to ${answers[2]}. My favorite meal is ${answers[3]}, and I love to eat ${answers[4]} at ${answers[3]}. My favorite sport is ${answers[5]} and my superpower is ${answers[6]}!`)
      
    }
  });
}

asyncQuestion(questions[i],i, asyncQuestion);