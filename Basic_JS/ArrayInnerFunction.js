const arr1 = [1, 2, 3, 4];

arr1.forEach((elm) => console.log(elm));

console.log(arr1);

const newArr = arr1.map((elm) => {
    return elm*2;
});

console.log(newArr);

let number = 3;

console.log(arr1.includes(number));
console.log(arr1.indexOf(number));

const arr = [
    { num : 1, color : "red" },
    { num : 2, color : "black" },
    { num : 3, color : "blue" },
    { num : 4, color : "green" },
    { num : 5, color : "blue" }
];

console.log(arr.filter((elm) => elm.color === "blue"));
console.log(arr.slice(0, 4));

const arr2 = [
    { num : 1, color : "red" },
    { num : 2, color : "black" },
    { num : 3, color : "blue" },
    { num : 4, color : "green" },
    { num : 5, color : "blue" }
];

console.log(arr.concat(arr2));

let chars = ["나", "다", "가"];

chars.sort();
console.log(chars);

let numbers = [0, 1, 3, 2, 10, 30, 20];

const compare = (a, b) => {
    if(a > b) {
        return 1;
    }
    else if(a < b) {
        return -1;
    }
    return 0;
}

numbers.sort(compare);
console.log(numbers);
