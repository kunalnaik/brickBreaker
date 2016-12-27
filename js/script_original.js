var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
  preload: preload, create: create, update: update
});
var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var score = 0;
var scoreText;

function preload() {
  // game world setup
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = '#eee';
  // loading images
  game.load.image('ball', 'assets/ball.png');
  game.load.image('paddle', 'assets/paddle.png');
  game.load.image('brick', 'assets/brick.png');
}

function create() {
  //set the system physics engine to Phaser's Arcade
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.checkCollision.down = false;
  // apply properites to ball
  ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.collideWorldBounds = true;
  ball.body.velocity.set(150, -150);
  ball.body.bounce.set(1);
  ball.checkWorldBounds = true;
  ball.events.onOutOfBounds.add(function() {
    alert("Game Over!");
    location.reload();
  }, this);
  // apply properties to paddle
  paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
  paddle.anchor.set(0.5, 1);
  game.physics.enable(paddle, Phaser.Physics.ARCADE);
  paddle.body.immovable = true;

  initBricks();

  scoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });
}

function update() {
  game.physics.arcade.collide(ball, paddle, paddleHit);
  game.physics.arcade.collide(ball, bricks, brickHit);
  paddle.x = game.input.x || game.world.width*0.5;
}

function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 7,
      col: 3
    },
    offset: {
      top: 50,
      left: 60
    },
    padding: 10
  }

  bricks = game.add.group();
  for(c=0; c<brickInfo.count.col; c++) {
    for(r=0; r<brickInfo.count.row; r++) {
      var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
      var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, 'brick');
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
}

function paddleHit(ball, paddle) {
  ball.body.velocity.x = -1*5*(paddle.x-ball.x);
}

function brickHit(ball, brick) {
  brick.kill();
  score += 1;
  scoreText.setText('Points: '+score, true);

  if(score == 21) {
    setTimeout(function() {
      alert('You won the game, congratulations!');
      location.reload();
    }, 60);
  }
}
