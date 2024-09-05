export abstract class Employee {
    name: string;
    age: number;
    salary: number;
    tasks: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift() as string;
        this.tasks.push(currentTask);

        return console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}
