const object1 = {
    "name": "John",
    "age": 45,
    "occupation": "business"
};

function printObjectprop(obj) {
    console.log("Object Properties=");
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}:${obj[key]}`);
        }
    }
}

function deleteSecondProp(obj) {
    const keys = Object.keys(obj);
    if (keys.length >= 2) {
        delete obj[keys[1]];
    }
}

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

printObjectprop(object1);
deleteSecondProp(object1);
console.log("After deleting second prop=");
printObjectprop(object1);
console.log("Length = ", getObjectLength(object1));