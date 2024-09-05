export class Ticket {
    public destination: string;
    public price: number;
    public status: string;

    constructor(description: string, price: number, status: string) {
        this.destination = description;
        this.price = price;
        this.status = status;
    }
}
