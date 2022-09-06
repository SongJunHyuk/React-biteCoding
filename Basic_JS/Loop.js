const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i]);
}

let person = {
    name: "송준혁",
    age: 27,
    height: 183
};

const personKeys = Object.keys(person);

for (let j = 0 ; j < personKeys.length; j++) {

    const curKey = personKeys[j];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
    
}