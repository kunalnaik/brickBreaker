var trainState = {
  create: function() {
    var title = "Instructions:"
    var instructions = "We need to train WebGazer to accurately track your\neyes. For best results, please keep your face close\nto the camera. While looking at your cursor, please\nclick on the blocks below in random order. Once you\nare done, press ENTER to begin the game."
    game.add.text(50, 50, title, {font: '35px Courier', fill: '#ffffff'});
    game.add.text(40, game.world.height-250, instructions, {font: '15px Courier', fill: '#ffffff'});

    for(i = 0; i < 9; i++) {
      game.add.button(10+(i*60), game.world.height-30, 'brick', this.actionOnClick);
      game.add.text()
    }

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },

  actionOnClick: function() {
    this.kill();
  },

  start: function() {
    game.state.start('play');
  }

  // //Only difference to a Button constructor is the label parameter...
  // LabelButton = function(game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
  //   Phaser.Button.call(this, game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
  //   //Style how you wish...
  //   this.style = {
  //     'font': '10px Arial',
  //     'fill': 'black'
  //   };
  //   this.label = new Phaser.Text(game, 0, 0, "Label", this.style);
  //   this.addChild(this.label);
  //   this.setLabel("Label");
  // };
  // LabelButton.prototype = Object.create(Phaser.Button.prototype);
  // LabelButton.prototype.constructor = LabelButton;
  // LabelButton.prototype.setLabel = function(label) {
  //   this.label.setText(label)
  //   this.label.x = Math.floor((this.width - this.label.width)*0.5);
  //   this.label.y = Math.floor((this.height - this.label.height)*0.5);
  // };
};
