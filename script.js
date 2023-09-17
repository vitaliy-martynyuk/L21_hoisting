class Student {
  isAdmin = false;
  constructor({ age, name, hobbies, amountOfLearnedLessons }) {
    this.studentAge = age;
    this.studentName = name;
    this.studentHobbies = hobbies;
    this.amountOfLearnedLessons = amountOfLearnedLessons;
  }

  getStudentInfo() {
    return `name: ${this.studentName}, age: ${this.studentAge}`;
  }
}

class AmpliStudent extends Student {
  constructor(props) {
    const { mentor, ...studentArgs } = props;
    const { age, name, hobbies, amountOfLearnedLessons } = studentArgs;

    super({ age, name, hobbies, amountOfLearnedLessons });
    this.studentMentor = mentor;
  }

  getStudentInfo = () => {
    return `name: ${this.studentName}, age: ${this.studentAge}, mentor: ${this.studentMentor}`;
  };
}

const bohdan = new Student({
  age: 17,
  name: "Bohdan",
  amountOfLearnedLessons: 20,
  hobbies: "games",
});

console.log(bohdan.getStudentInfo());

const anna = new Student({
  amountOfLearnedLessons: 20,
  hobbies: "reading",
  name: "Anna",
  age: 16,
});

console.log(anna.getStudentInfo());

const sergii = new AmpliStudent({
  age: 15,
  name: "Sergii",
  amountOfLearnedLessons: 20,
  hobbies: "games",
  mentor: "Vitalii",
});

console.log(sergii.getStudentInfo());

const container = document.getElementById("container");

console.log(container);

container.style.height = "100px";
container.style.width = "100px";
container.style.margin = "0 auto";

for (let i = 0; i < 10; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";

  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    cell.style.height = "10px";
    cell.style.width = "10px";
    cell.style.border = "1px solid black";

    cell.setAttribute("class", "gameCell");
    cell.setAttribute("id", `${i}${j}`);

    row.appendChild(cell);
  }

  container.appendChild(row);
}

//1. доступ до let/const змінної за межами блоку
//error +
//undefined
//0
//1
// console.log(i);
if (typeof "asdasd" === "string") {
  //const i = 0;
  let i = 0;
} else {
  //const i = 1;
  let i = 1;
}

//2. доступ до let/const змінної за межами блоку
//error +
//0
if (typeof "asdasd" === "string") {
  const i = 0;
} else {
  const i = 1;
}
// console.log(i);

//3. доступ до var змінної перед оголошенням
//1
//0
//error
//console.log(i);
if (typeof "asdasd" === "string") {
  var i = 0;
} else {
  var i = 1;
}

//4. доступ до let/const + var змінних до оголошення(hoisting)
console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);

var varVariable = 2;
let letVariable = 1;
const constVariable = 3;

console.log(varVariable);
console.log(letVariable);
console.log(constVariable);

//5. function vs arrow function
//arrowFunction();
regularFunction();

const arrowFunction = () => {
  console.log("arrowFunction");
};

function regularFunction() {
  console.log(this);
  console.log("regularFunction");
}

console.log(window.varVariable);
window.regularFunction();

const car = {
  brand: "Lexus",
  wheels: 4,
  testArrowFunction: () => {
    console.log(this);
  },
  testRegularFunction: function () {
    console.log(this);
  },
};

car.testRegularFunction();
car.testArrowFunction();
