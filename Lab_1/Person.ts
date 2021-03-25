
interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name: string;
    surname: string;
    age: number;
    role: string;
}

const users: Person[] = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
]

const admins: Person[] = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
]

function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    const {name, surname, age, role} = person;
    console.log(`Imię: ${name}; \n Nazwisko:${surname}; \n Age:${age}; \n Role:${role};`)
}

function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    // return persons.filter(el => {
    //     const key = Object.keys(criteria);
        
    // });
    let keys = Object.keys(criteria);
    const returnableArray = persons.filter(el => {
        
    })
    return returnableArray;
}

const persons : Person[] = [...users, ...admins];
const result = filterPersons(persons, {name: "John"});
