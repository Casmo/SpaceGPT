// Define the addBullet function
function addBullet(direction) {
  // Create a new bullet object
  var bullet = {
    // Set the initial position of the bullet to the position of the player
    x: player.x,
    y: player.y,

    // Set the size and speed of the bullet
    size: 10,
    speed: 5,
    direction: direction,

    // Define the update function
    update: function () {
      // Update the position of the bullet based on the direction and speed
      this.x += Math.cos(this.direction) * this.speed;
      this.y += Math.sin(this.direction) * this.speed;

      // Check if the bullet has reached the side of the screen
      if (this.x + this.size > canvas.width || this.x < 0) {
        // Remove the bullet from the bullets array
        bullets.splice(bullets.indexOf(this), 1);
      }
    },

    // Define the render function
    render: function () {
      // Get the context of the canvas
      var ctx = canvas.getContext("2d");

      // Set the fill color of the bullet
      ctx.fillStyle = "black";

      // Draw a filled circle at the current position of the bullet
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
      ctx.fill();
    },
  };

  // Add the bullet to the game
  bullets.push(bullet);
}
// Define the removeBullet function
function removeBullet(bullet) {
  // Find the index of the bullet in the bullets array
  var index = bullets.indexOf(bullet);

  // Remove the bullet from the bullets array
  if (index > -1) {
    bullets.splice(index, 1);
  }
}
