const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4, undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar, nanVar);

let testObj = {
    testString: 'Stringy thingy',
    testNum: 2,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArray: [1, 2, 3, 4, undefined],
    testNaN: NaN
};

let newObj = {newString: 'more strings', anotherString: 'this is a string', testObj};
console.log(newObj);