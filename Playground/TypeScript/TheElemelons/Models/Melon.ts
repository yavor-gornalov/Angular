export abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    abstract get elementType(): string;

    tostring(): string {
        return `Element: ${this.elementType}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`;
    }
}