class Person{
    firstName:string
    lastName:string
    dateOfBirth:Date
    constructor(fname:string,lname:string,date1:Date){
        this.firstName = fname;
        this.lastName = lname;
        this.dateOfBirth = date1
    }
    show(){
        alert("Name: "+this.firstName+" "+this.lastName+" date of birth is "+this.dateOfBirth)
    }
}

let p:Person = new Person('Abon','Duttaroy',Date(1984,8,14));
p.show();