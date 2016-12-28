// create game variable
var game = new Phaser.Game(480, 320, Phaser.WEBGL, "gameDiv");

// add states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// first start the boot state
game.state.start('boot');
