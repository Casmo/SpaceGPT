// Create the enemy object
var enemy = {
  // Set the initial position and size of the enemy
  x: 0,
  y: 0,
  size: 50,

  // Set the speed of the enemy
  speed: 5,

  // Set the direction of the enemy
  direction: 1, // 1 = right, -1 = left

  health: 0,

  // Define the update function
  update: function () {
    // Update the position of the enemy
    this.x += this.speed * this.direction;

    // Reverse the direction of the enemy if it reaches the edge of the screen
    if (this.x < 0 || this.x + this.size > canvas.width) {
      this.direction *= -1;
      this.speed = Math.min(this.speed + 1, 15);
      this.y += this.size / 2;
    }

    // Check for collisions with the bullets
    for (var i = 0; i < bullets.length; i++) {
      var bullet = bullets[i];

      // Check if the enemy is colliding with the bullet
      if (
        this.x < bullet.x + bullet.size &&
        this.x + this.size > bullet.x &&
        this.y < bullet.y + bullet.size &&
        this.y + this.size > bullet.y
      ) {
        this.health--;

        removeBullet(bullet);

        if (this.health <= 0) {
          // Remove the enemy and the bullet
          removeEnemy(this);
          addScore();
          // Create an explosion of particles at the position of the enemy
          createParticles(this.x, this.y, 20, "blue");
          return;
        }
      }
    }
    if (checkCollision(this, player)) {
      // Remove the enemy from the enemies array
      enemies.splice(enemies.indexOf(this), 1);
      addScore(-1);
      return;
    }
    if (this.y + this.size > canvas.height) {
      enemies.splice(enemies.indexOf(this), 1);
      return;
    }
  },

  // Define the render function
  render: function () {
    // Get the context of the canvas
    var ctx = canvas.getContext("2d");

    // Set the fill color of the enemy
    ctx.fillStyle = "blue";

    // Begin drawing the path
    ctx.beginPath();

    // Move to the top point of the triangle
    ctx.moveTo(this.x + this.size / 2, this.y);

    // Draw the left and right sides of the triangle
    ctx.lineTo(this.x, this.y + this.size);
    ctx.lineTo(this.x + this.size, this.y + this.size);

    // Close the path and fill the triangle
    ctx.closePath();
    ctx.fill();
  },
};

// Define the addEnemy function
function addEnemy() {
  // Create a new enemy object
  var newEnemy = Object.create(enemy);

  // Set the position of the new enemy
  newEnemy.x = Math.random() * canvas.width;
  newEnemy.y = (Math.random() * canvas.height) / 2;
  newEnemy.health = Math.floor(Math.random() * 5) + 1;

  // Add the new enemy to the enemies array
  enemies.push(newEnemy);
}
// Define the removeEnemy function
function removeEnemy(enemy) {
  // Find the index of the enemy in the enemies array
  var index = enemies.indexOf(enemy);

  // Remove the enemy from the enemies array
  if (index > -1) {
    enemies.splice(index, 1);
  }
  // Check if a powerup should be added
  if (Math.random() < 0.25) {
    addPowerup(enemy.x, enemy.y);
  }
}
