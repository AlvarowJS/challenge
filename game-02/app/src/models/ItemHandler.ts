import { Item } from './Item';

export abstract class ItemHandler {
    protected item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    abstract update(): void;

    protected decreaseSellIn(): void {
        this.item.sellIn -= 1;
    }

    protected increaseQuality(amount: number = 1): void {
        this.item.quality = Math.min(50, this.item.quality + amount);
    }

    protected decreaseQuality(amount: number = 1): void {
        this.item.quality = Math.max(0, this.item.quality - amount);
    }
}
