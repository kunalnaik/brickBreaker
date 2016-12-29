var loadState = {
  preload: function() {
    // align game to center
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // add loading text
    game.add.text(game.world.width*0.5, game.world.height*0.5, 'loading..', {font: '30px Courier', fill: '#ffffff'});

    // load assets
    game.load.image('ball', 'assets/ball.png');
    game.load.image('paddle', 'assets/paddle.png');
    game.load.image('brick', 'assets/brick.png');
  },

  create: function() {
    game.state.start('menu');
  }
};
