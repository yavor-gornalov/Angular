import { Employee } from './Models/Employee.js';

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}

export class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }

    public getSalary(): number {
        return this.salary + this.dividend;
    }
}

var junior = new Junior('Junior', 20);
junior.work();

var senior = new Senior('Senior', 30);
senior.work();
senior.work();

var manager = new Manager('Manager', 40);
manager.salary = 1000;
manager.dividend = 200;
manager.work();
manager.work();
manager.collectSalary();
