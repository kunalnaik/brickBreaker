var menuState = {
  create: function() {
    game.add.text(30, 100, 'psychicBreaker', {font: '50px Courier', fill: '#ffffff'});
    game.add.text(80, game.world.height-100, 'press enter to start', {font: '25px Courier', fill: '#ffffff'});

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  }
};
