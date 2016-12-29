var menuState = {
  create: function() {
    game.add.text(60, 100, 'psychicBreaker', {font: '50px Courier', fill: '#ffffff'});
    game.add.text(110, 250, 'press ENTER to start', {font: '25px Courier', fill: '#ffffff'});

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('train');
  }
};
