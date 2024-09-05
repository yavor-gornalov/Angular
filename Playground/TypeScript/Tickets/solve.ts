import { Ticket } from './ticket';

// Solve function
function solve(data: string[], criteria: string): Ticket[] {
    let tickets: Ticket[] = data.map(x => x.split('|'))
        .map(x => new Ticket(x[0], Number(x[1]), x[2]));

    if (criteria === "destination") {
        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === "price") {
        tickets = tickets.sort((a, b) => a.price - b.price);
    } else if (criteria === "status") {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}

// Test data
const data = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
const criteria = 'status';

// Test result
console.log(solve(data, criteria));
