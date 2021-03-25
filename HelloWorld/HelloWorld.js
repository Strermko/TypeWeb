var Person = /** @class */ (function () {
    function Person(name, surename, age) {
        var _this = this;
        this.show = function () {
            console.log("Witaj " + _this.name + " i " + _this.surename + " mam " + _this.age + " lat");
        };
        this.name = name;
        this.surename = surename;
        this.age = age;
    }
    return Person;
}());
var p = new Person("Ivan", "Popov", 25);
p.show();
