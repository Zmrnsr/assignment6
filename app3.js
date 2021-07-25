function Person(first, last, age, id, school) {
this.first = first;
this.last = last;
this.age = age;
this.id = id;
this.school = school;
}
Create a Person Object
const Student1 = new Person("Muhammad", "Wasi", 19, 20405, "Saylani");
const Student2 = new Person("Adil", "Azmat", 22, 84834, "Axiom");
console.log(Student1, Student2);