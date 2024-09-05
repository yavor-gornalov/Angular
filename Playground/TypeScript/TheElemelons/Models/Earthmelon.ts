import { Melon } from "./Melon";

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementType(): string {
        return 'Earth';
    }
}