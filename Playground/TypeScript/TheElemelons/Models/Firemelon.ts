import { Melon } from "./Melon";

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }
    get elementType(): string {
        return 'Fire';
    }
}