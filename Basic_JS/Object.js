let person = {
    name: "송준혁",
    age: 27,
    say: function() {
        console.log(`안녕 나는 ${this.name}`);
    }
};

function getPropertyValue(key) {
    return person[key];
}

console.log(getPropertyValue("name"));

person.location = "한국";

console.log(person);

person.name = null;

console.log(person);

person["name"] = "송준혁";
console.log(person.say());