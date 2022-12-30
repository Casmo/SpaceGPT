// Define the addPowerup function
function addPowerup(x, y, type = "shootInterval") {
  let randomNumber = Math.random();
  if (randomNumber < 0.2) {
    type = 'speedUp';
  }
  // Create a new powerup object
  var powerup = {
    // Set the size, speed, and color of the powerup
    size: 20,
    speed: 2,
    color: "green",
    type: type,

    // Set the initial position and direction of the powerup
    x: x,
    y: y,
    direction: Math.PI / 2,

    // Define the render function
    render: function () {
      // Get the context of the canvas
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y - this.size);
      ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
      ctx.lineTo(this.x, this.y + this.size);
      ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
      ctx.lineTo(this.x, this.y - this.size);
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
        removePowerup(this);
      }
    },
  };

  // Add the powerup to the list of powerups
  powerups.push(powerup);
}

// Define the removePowerup function
function removePowerup(powerup) {
  // Remove the powerup from the list of powerups
  var index = powerups.indexOf(powerup);
  if (index > -1) {
    powerups.splice(index, 1);
    bulletSpeedDiv.textContent = `Bullet Speed: ${bulletSpeed}`;
    shootIntervalDiv.textContent = `Shoot Interval: ${player.shootInterval}`;
  }
}
