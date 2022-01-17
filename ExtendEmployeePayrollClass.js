// UC-13

class EmployeePayrollData
{
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(id, name, salary, gender, startDate)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate =  startDate;
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) { this._name = name; }

    // method 
    toString()
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Naveen", 33000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1, "Lokesh", 44000, "M", new Date());
console.log(newEmployeePayrollData.toString());