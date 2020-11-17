const chalk = require('chalk');
const log = console.log;

const chalkAnimation = require('chalk-animation');
 

 
// Combine styled and normal strings
<<<<<<< HEAD
log(chalk.red('Hello let me tell you a story') + ' about a little old woman' + chalk.blue(' who had a big scare'));
log(chalk.green('In reality she was just crazy') + ' a cazy old little lady' + chalk.green(' the world never ended'));
log(chalk.cyan('Every thing was fine in the end a her life went on and on and on.'));
chalkAnimation.glitch('soon there would be more like her in 2020');
=======
log(chalk.red.underline('Hello let me tell you a story') + ' about a little old woman' + chalk.blue.bold(' who had a big scare'));
// log(chalk.green('In reality she was just crazy') + ' a cazy old little lady' + chalk.yellow(' the world never ended'));

log(chalkAnimation.glitch('soon the world will end... she thought is 2012 is was porjected in the "aincent text" that every one obsess over'));
log(chalk.green('In reality she was just crazy') + ' a cazy old little lady' + chalk.yellow(' the world never ended'));
>>>>>>> eceb124ac46faed6795b8525b5b6faf9a30e0a6d

