// Enemies our player must avoid. Passed x and y arguments
var Enemy = function(x, y, velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.velocity = getRandomInt(80, 250);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.velocity*dt;
    if (this.x > 550){
        this.x = -150;
    }
    // Collision Detection: Using .abs to get absolute number otherwise it won't work
    if (Math.abs(this.x - player.x) < 75 &&
        Math.abs(this.y - player.y) < 78) {
            player.x = 202;
            player.y = 405;
            player.lives-=1;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class. Passed x and y arguments
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x, y) {
    this.score=0;
    this.lives=3;
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.playKeys=true;
}

// Condition used to stop random key strokes
//let playKeys = true;

Player.prototype.update = function(){
    //Return the player back once they hit water: With delay
    if (this.y < 0) {
        if (playKeys = false) return;
        setTimeout(() => {
            playKeys = false; //key strokes off
            this.x = 202;
            this.y = 405;
            console.log("time!");
       }, 500);
       
    }
    playKeys = true; // key strokes on
}

//Draw the player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Move the player around
Player.prototype.handleInput = function(key){
    if (playKeys = false) return false; //playKeys stops random key strokes
    
    if (key == "left" && this.x > 10){
        this.x -= 100;
    }
    if (key == "right" && this.x < 400){
        this.x += 100;
    }
    if (key == "up" && this.y > -20){
        this.y -= 85;
    }
    if (key == "down" && this.y < 400){
        this.y += 85;
    }
    if (key="up" && player.y < 0) {
        player.score+=1;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = 
    [
    enemy1 = new Enemy(60,60),
    enemy2 = new Enemy(150,145),
    enemy3 = new Enemy(300,230)
    ];

// Place the player object in a variable called player
const player = new Player(202,405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function move (e) {
    if (playKeys = false) return false; 
    var allowedKeys = {
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    if(player.playKeys=true)
    player.handleInput(allowedKeys[e.keyCode]);
});

// This returns a random integer between the specified values (from MDN)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }