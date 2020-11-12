const chalk = require('chalk');
const log = console.log;

const chalkAnimation = require('chalk-animation');
 

 
// Combine styled and normal strings
log(chalk.red.underline('Hello let me tell you a story') + ' about a little old woman' + chalk.blue.bold(' who had a big scare'));
// log(chalk.green('In reality she was just crazy') + ' a cazy old little lady' + chalk.yellow(' the world never ended'));

log(chalkAnimation.glitch('soon the world will end... she thought is 2012 is was porjected in the "aincent text" that every one obsess over'));
log(chalk.green('In reality she was just crazy') + ' a cazy old little lady' + chalk.yellow(' the world never ended'));

