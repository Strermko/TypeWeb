class Person {
    name: string;
    surename: string;
    age: number;

    constructor(name: string, surename: string, age: number){
        this.name = name;
        this.surename = surename;
        this.age = age;
    }

    Show = () => {
        console.log(`Witaj ${this.name} i ${this.surename} mam ${this.age} lat`)
    }
}

const p = new Person("Ivan", "Popov", 25)
p.Show();