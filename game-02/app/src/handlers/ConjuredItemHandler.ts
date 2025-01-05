import { ItemHandler } from '../models/ItemHandler';

export class ConjuredItemHandler extends ItemHandler {
    update(): void {
        this.decreaseQuality(2);
        this.decreaseSellIn();
        if (this.item.sellIn < 0) {
            this.decreaseQuality(2);
        }
    }
}
