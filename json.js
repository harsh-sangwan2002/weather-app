const x = Symbol('123');

// Keys are strings in json
// Valid values are - string, number, boolean, null, objects, array
const obj = {
    name: "Harsh",
    age: 32,
    friends: ["Naman", "Vignesh"],
    [x]: 123,
    address: {
        city: "Pune",
    },
    val1: undefined,
    val2: null,
    fn: function () {
        console.log("Hi")
    },
}

const json = JSON.stringify(obj);
console.log(json);
console.log(typeof json);

const obj2 = JSON.parse(json);
console.log(obj2);
console.log(typeof obj2);