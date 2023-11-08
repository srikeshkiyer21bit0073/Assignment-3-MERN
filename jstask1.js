function rev(x) {
    var r = 0;
    while (x != 0) {
      r = r + (x % 10);
      r = r * 10;
      x = Math.floor(x / 10);
    }
    r=r/10;
    console.log("reversed number is: " + r);
  }
  rev(32243);
  