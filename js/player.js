// Create the player object
var player = {
  // Set the initial position of the player to the center of the canvas
  x: 500,
  y: 500,

  canShoot: true,
  shootInterval: 750,
  direction: 0,

  color: "#f00",

  moveDirection: 0,

  // Set the size of the player
  size: 50,

  // Define the update function
  update: function () {
    // Check if the player is moving
    if (this.x !== mouseX || this.y !== mouseY) {
      // Calculate the move direction of the player
      this.moveDirection = Math.atan2(mouseY - this.y, mouseX - this.x);
    }

    // Update the position of the player
    this.x = mouseX;
    this.y = mouseY;

    // Check if the mouse is down and the player is allowed to shoot
    if (mouseDown && this.canShoot) {
      // Add a new bullet
      addBullet(this.moveDirection);

      // Set the canShoot flag to false
      this.canShoot = false;

      // Set a timeout to allow the player to shoot again after a certain amount of time
      setTimeout(function () {
        player.canShoot = true;
      }, player.shootInterval);
    }
  },

  // Define the render function
  render: function () {
    // Get the context of the canvas
    var ctx = canvas.getContext("2d");

    // Save the current context
    ctx.save();

    // Translate the context to the player's position
    ctx.translate(this.x, this.y);

    // Rotate the context based on the player's move direction
    ctx.rotate(this.moveDirection);

    // Set the fill style to the player's color
    ctx.fillStyle = this.color;

    // Draw the player as a triangle
    ctx.beginPath();
    ctx.moveTo(-this.size / 2, -this.size / 2);
    ctx.lineTo(this.size / 2, 0);
    ctx.lineTo(-this.size / 2, this.size / 2);
    ctx.closePath();
    ctx.fill();

    // Restore the context
    ctx.restore();
  },

  hits: function (powerup) {
    return (
      this.x < powerup.x + powerup.size &&
      this.x + this.size > powerup.x &&
      this.y < powerup.y + powerup.size &&
      this.y + this.size > powerup.y
    );
  },
};
