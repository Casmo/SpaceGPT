// Define the powerup object
var powerup = {
  // Set the size, speed, and color of the powerup
  size: 20,
  speed: 2,
  color: "red",

  // Set the initial position and direction of the powerup
  x: Math.random() * canvas.width,
  y: 0,
  direction: Math.PI / 2,

  // Define the render function
  render: function () {
    // Get the context of the canvas
    var ctx = canvas.getContext("2d");

    // Set the fill color of the powerup
    ctx.fillStyle = this.color;

    // Draw a filled circle at the current position of the powerup
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  },

  // Define the update function
  update: function () {
    // Update the position of the powerup
    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;

    // Check if the powerup has reached the bottom of the screen
    if (this.y + this.size > canvas.height) {
      // Remove the powerup
      removePowerup();
    }
  },
};
// Define the addPowerup function
function addPowerup() {
  // Add the powerup to the list of powerups
  powerups.push(powerup);
}

// Define the removePowerup function
function removePowerup() {
  // Remove the powerup from the list of powerups
  var index = powerups.indexOf(powerup);
  if (index > -1) {
    powerups.splice(index, 1);
  }
}
