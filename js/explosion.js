// Create the particle object
var particle = {
    // Set the initial position and size of the particle
    x: 0,
    y: 0,
    size: 5,

    // Set the lifetime of the particle
lifetime: 100,

  // Set the rotation of the particle
rotation: 0,

    // Set the speed and direction of the particle
    speed: 5,
    direction: 0,
  
    // Set the color of the particle
    color: "blue",
  
    // Define the update function
    update: function() {
      // Update the position of the particle
      this.x += Math.cos(this.direction) * this.speed;
      this.y += Math.sin(this.direction) * this.speed;

  // Decrease the lifetime of the particle
  this.lifetime--;
  if (this.lifetime <= 0) {
    particles.splice(particles.indexOf(this), 1);
  }
    },
  
    // Define the render function
    render: function() {
      // Get the context of the canvas
      var ctx = canvas.getContext("2d");
  
      // Set the fill color of the particle
      ctx.fillStyle = this.color;

  // Save the current transformation matrix
  ctx.save();
        // Translate and rotate the context
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rotation);
  
      // Draw a filled triangle at the current position of the particle
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.size, this.size);
      ctx.lineTo(-this.size, this.size);
      ctx.closePath();
      ctx.fill();

      // Restore the transformation matrix
      ctx.restore();

      // Update the rotation of the particle
      this.rotation += 0.1;
    }
  };
  
  // Define the createParticles function
  function createParticles(x, y, numParticles, color) {

    // Generate the particles
    for (var i = 0; i < numParticles; i++) {
      // Create a new particle
      var p = Object.create(particle);
  
      // Set the position of the particle
      p.x = x;
      p.y = y;
  
      // Set the color of the particle
      p.color = color;

      // Set the direction and speed of the particle
      p.direction = Math.random() * Math.PI * 2;
      p.speed = Math.random() * 5;

      // Add the particle to the particles array
      particles.push(p);
    }
  
    // Return the particles array
    return particles;
  }