// create game variable
var game = new Phaser.Game(550, 400, Phaser.AUTO, '');

// add states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('train', trainState);
game.state.add('play', playState);

// first start the boot state
game.state.start('boot');
