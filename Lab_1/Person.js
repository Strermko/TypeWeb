var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    var name = person.name, surname = person.surname, age = person.age, role = person.role;
    console.log("Imi\u0119: " + name + "; \n Nazwisko:" + surname + "; \n Age:" + age + "; \n Role:" + role + ";");
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    // return persons.filter(el => {
    //     const key = Object.keys(criteria);
    // });
    console.log(Object.keys(criteria));
    return null;
}
var persons = __spreadArray(__spreadArray([], users), admins);
var result = filterPersons(persons, { name: "John" });
