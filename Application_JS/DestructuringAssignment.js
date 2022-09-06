let arr = ["one", "two", "three"];

let [one, two, three, four="four"] = arr;
console.log(one, two, three, four);

let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);

let object = { o : "one", t : "two", th : "three" };

let { o, t, th } = object;
console.log(one, two, three)