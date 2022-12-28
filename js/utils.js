function checkCollision(a, b) {
    // Check if the two objects are colliding
    return (a.x < b.x + b.size && a.x + a.size > b.x && a.y < b.y + b.size && a.y + a.size > b.y);
  }
  