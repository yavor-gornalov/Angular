import { Melon } from './Melon';

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementType(): string {
        return 'Water';
    }
} 