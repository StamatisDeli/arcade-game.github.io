**frontend-nanodegree-arcade-game**
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

**Play the game**
=====================
Enjoy!!
https://stamatisdeli.github.io/arcade-game.github.io/

**Journal**
================
This is a journal of me making the project at hand

List of Task items:

First thought: I much prefered if I had specific directions and do all the code myself.
Maybe it wouldn't be perfect, but the code would me my own.
Right now, I don't think that anyone fully understands what they are doing.

1. Understand the given code
    
    I am studying everything I can find, including other people's code.

2. Pass my code according to directions
    - I made a Player object, update (blank for now), render - Why are we not using Classes?
    - I passed x and y in Enemy and Player
    - I made an array of 3 enemies with custom coordinates
    - I passed custom coordinates to all enemies and player, so the 'terrain' appeared.
    - I managed to make the player move. adjusting coordinates (I think)(handleInput function)
        Note: each time I pass player; in console, I get current position.
    - Player returns to starting point when they hit water (handleInput function)
    - I used a random function I found in MDN for generating a random number for enemy velocity
    - Bug: Player dances around after hitting the water and returns to starting point.
        I discovered that the game loop calls the setTimeOut multiple times (49!!!).
            - Fixed: Added a condition to playKeys=true/false on both the player and handleInput
    - I managed to draw my Lifes indicator inside Render(), and make separate function renderLives()
        Got them to update!!!! yeee!!!
    - Did the score indicator renderScore()
        Bug: the score is incremented 31 times instead of 1. lol
        I passed the functionality to the Player,prototype.handleInput function, and it worked there. I have NO idea why!!!!!!!!
            Bug: random keystroke increases the counter
    -Did a gameOver screen, and reset with spacebar


**Acknowledgements**
=====================
I would like to thank the community for sharing their projects, so us newbies
can have an idea about what to do with the project.
As always, special thanks to the Drill Sergean Nicolas Marcora for his invaluable help.