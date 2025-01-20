class GameObject {
  constructor(x, y, units = "array") {
    if (units === "array") {
      this.rowObjecX = x;
      this.columnsObjectY = y;
      this.objectPixelsX = null;
      this.objectPixelsY = null;
    } else if (units === "nivell") {
      this.objectPixelsX = x;
      this.objectPixelsY = y;
      this.rowObject = null;
      this.columnsObject = null;
    }

    showObject(img,x,y){
      image(img, x,y);
    }

    function draw(){
      background(220);
      let c = suma(3,2);
      arrayRocks.forEach(rock=> rock.showImage imgRock,x,y);
    }
  }
}
