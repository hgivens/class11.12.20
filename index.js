/*hannah givens
11/17/20
chalk it up
*/
const chalk = require('chalk');
const log = console.log;

const chalkAnimation = require('chalk-animation');
 

 
// Combine styled and normal strings

log(chalk.red('Hello let me tell you a story') + ' about a little old woman' + chalk.blue(' who had a big scare'));
log(chalk.green('In reality she was just crazy') + ' a cazy old little lady' + chalk.green(' the world never ended'));
log(chalk.cyan('Every thing was fine in the end a her life went on and on and on.'));
chalkAnimation.glitch('soon there would be more like her in 2020');

