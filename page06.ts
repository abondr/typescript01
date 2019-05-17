class Person {
    protected firstName: string
    protected lastName: string
    protected dateOfBirth: Date
    constructor(fn: string, ln: string, dob: Date) {
        this.firstName = fn;
        this.lastName = ln;
        this.dateOfBirth = dob;
    }
    public greet(friendName: string): string {
        return "Hello " + friendName + ", how are you doing?";
    }
    public selfIntrodution(): string {
        let age = (new Date().getFullYear() - this.dateOfBirth.getFullYear())
        return "Hello, I am " + this.firstName + " " + this.lastName + " and I am " + age + "yrs old";
    }
}
/*let person: Person = new Person("Abon","Duttaroy",new Date(1984,8,14));
alert(person.selfIntrodution());
alert(person.greet("Bapan"));*/

class Employee extends Person {
    protected departmentName: string
    protected salary: number
    constructor(fn: string, ln: string, dateOfBirth: Date, deptName: string,
         sal: number) {
        super(fn, ln, dateOfBirth);
        this.departmentName = deptName;
        this.salary = sal;
    }
    public selfIntrodution(): string {
        var selfIntro:string = super.selfIntrodution();
        return selfIntro+" department "+this.departmentName+" and salary "+this.salary;
    }
}

let emp1:Employee = new Employee("Abon","Duttaroy",new Date(1984,8,14),"IT",33500);
alert(emp1.selfIntrodution());

