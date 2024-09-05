import { Melon } from "./Melon";

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementType(): string {
        return 'Air';
    }
}