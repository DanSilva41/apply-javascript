// const earlyRectangle = new Rectangle(3, 4); // ReferenceError

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle);

let ExpressionRectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const expressionRectangle = new ExpressionRectangle(10, 20);
console.log(expressionRectangle);