var bootState = {
  create: function() {
    // set the system physics engine to Phaser's Arcade
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;

    // start the load state
    game.state.start('load');
  }
};
