// Create the player object
var player = {
    // Set the initial position of the player to the center of the canvas
    x: 500,
    y: 500,
  
    // Set the size of the player
    size: 50,
  
    // Define the render function
    render: function() {
      // Get the context of the canvas
      var ctx = canvas.getContext("2d");
  
      // Set the fill color of the player
      ctx.fillStyle = "red";
  
      // Draw a filled rectangle at the current position of the player
      ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }
  };