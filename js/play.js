var playState = {
  ball: null,
  paddle: null,
  bricks: null,
  newBrick: null,
  brickInfo: null,
  score: 0,
  scoreText: null,

  create: function() {
    // apply properites to ball
    this.ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
    game.physics.enable(this.ball, Phaser.Physics.ARCADE);
    this.ball.body.collideWorldBounds = true;
    this.ball.body.velocity.set(150, -150);
    this.ball.body.bounce.set(1);
    this.ball.checkWorldBounds = true;
    this.ball.events.onOutOfBounds.add(function() {
      alert("Game Over!\nYour score: "+this.score);
      location.reload();
    }, this);
    // apply properties to paddle
    this.paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    this.paddle.anchor.set(0.5, 1);
    game.physics.enable(this.paddle, Phaser.Physics.ARCADE);
    this.paddle.body.immovable = true;
    // initialize bricks
    this.initBricks();
    // add score count text
    this.scoreText = game.add.text(15, 15, 'Points: '+this.score, { font: '18px Arial', fill: '#0095DD' });
  },

  update: function() {
    game.physics.arcade.collide(this.ball, this.paddle, this.paddleHit);
    game.physics.arcade.collide(this.ball, this.bricks, this.brickHit);
    this.paddle.x = game.input.x || game.world.width*0.5;
  },

  initBricks: function() {
    this.brickInfo = {
      width: 50,
      height: 20,
      count: {
        row: 7,
        col: 3
      },
      offset: {
        top: 70,
        left: 93
      },
      padding: 10
    }

    this.bricks = game.add.group();
    for(c=0; c<this.brickInfo.count.col; c++) {
      for(r=0; r<this.brickInfo.count.row; r++) {
        var brickX = (r*(this.brickInfo.width+this.brickInfo.padding))+this.brickInfo.offset.left;
        var brickY = (c*(this.brickInfo.height+this.brickInfo.padding))+this.brickInfo.offset.top;
        this.newBrick = game.add.sprite(brickX, brickY, 'brick');
        game.physics.enable(this.newBrick, Phaser.Physics.ARCADE);
        this.newBrick.body.immovable = true;
        this.newBrick.anchor.set(0.5);
        this.bricks.add(this.newBrick);
      }
    }
  },

  paddleHit: function(ball, paddle) {                                           // ball and brick are passed by phaser.physics.collide
    ball.body.velocity.x = -1*5*(paddle.x-ball.x);
  },

  brickHit: function(ball, brick) {                                             // ball and brick are passed by phaser.physics.collide
    brick.kill();
    playState.score += 1;
    playState.scoreText.setText('Points: '+playState.score, true);

    if(playState.score == 21) {
      setTimeout(function() {
        alert('You Win!\nYour score: '+playState.score);
        location.reload();
      }, 60);
    }
  }
};
