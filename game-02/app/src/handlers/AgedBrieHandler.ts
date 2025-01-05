import { ItemHandler } from '../models/ItemHandler';

export class AgedBrieHandler extends ItemHandler {
    update(): void {
        this.increaseQuality();
        if (this.item.sellIn <= 0) {
            this.increaseQuality();
        }
        this.decreaseSellIn();
    }
}
