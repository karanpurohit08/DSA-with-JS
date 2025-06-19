class User {
  constructor(name, age, qualification, techStack) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
    this.techStack = techStack;
    this.getName = () => {
      return this.name;
    };
  }
}
// after es6 new class keyword was introduced
const user1 = new User("karan", 21, "btech", "mern");

function ConstructorFun(name, age, education) {
  this.name = name;
  this.age = age;
  this.education = education;
} // before es6

const firstUser = new ConstructorFun("karan", 21, "btech"); // this will act as a blueprint of ConstructorFun
// console.log(firstUser, "firstUser");

const obj = {}; // it won't act a blueprint

const p1 = {
  projectName: "Seedling",
  type: "web",
};

const p2 = Object.create(p1); // it stored the p1 in it's __proto__
// In js whenever you try to access any key first it will be check in the main object and then it's __proto__

// console.log(p2.projectName, "p2");

const obj1 = {
  px1: "Here is the px1",
};
const obj2 = {
  px2: "Here is the px2",
  __proto__: obj1,
};

const obj3 = {
  px3: "Here is the px3",
  __proto__: obj2,
};
// console.log(obj3.px1, "px1"); // first it search the px1 to it's own keys, then to it's own __proto__ , if not in it's protos then it will go upto it's proto's proto

// console.log(obj1.__proto__); // It will null prototype as we haven't mention it's proto

class Student {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const newStudent = new Student("kkk"); // This new keyword will basically set newStudent __proto__ as a Student
// console.log(Student.prototype, "students prototype");
// console.log(newStudent.__proto__, "new student");
// console.log(newStudent.getName());

//difference between __proto__ and prototype: __proto__ is attached to the object with the base class's prototype

const s1 = new Student("s1");
// console.log(s1 instanceof Student); // return true
s1.__proto__ = null;
// console.log(s1 instanceof Student); // return false as the proto chaining has been broken

const ob1 = {
  name: "karan",
};
const ob2 = ob1; // It doesn't make a copy instead it point out to the same object ob1

function makeDeepCopy(obj) {
  if (typeof obj != "object" || obj == null) {
    return;
  }

  const copyVal = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copyVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }

  return copyVal;
}

const arr = [1, 2, 3, 4];
// console.log(makeDeepCopy(ob1));
