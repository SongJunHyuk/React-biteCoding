const getName = (person) => {
    if(!person) {
        return "객체가 아닙니다";
    }
    return person.name;
}

let person;
const name = getName(person);
console.log(name);