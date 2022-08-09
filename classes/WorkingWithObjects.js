const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

const otherCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

function listAllProperties(object) {
    let objectToInspect = object;
    let result = [];

    while(objectToInspect !== null) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
        objectToInspect = Object.getPrototypeOf(objectToInspect);
    }

    return result;
}

console.log(listAllProperties(myCar));