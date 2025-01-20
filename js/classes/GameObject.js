class GameObject {
  constructor(x, y, units = "array") {
    if (units === "array") {
      this.rowObjecX = x;
      this.columnsObjectY = y;
    } else if (units === "nivell") {
      this.objectPixelsX = x;
      this.objectPixelsY = y;
      this.rowObject = null;
      this.columnsObject = null;
    }
  }
}
