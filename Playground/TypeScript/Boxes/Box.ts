export class Box<T> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    add(element: T): void {
        this.elements.push(element);
    }

    remove(): void{
        this.elements.shift();
    }

    get count(): number {
        return this.elements.length;
    }
}