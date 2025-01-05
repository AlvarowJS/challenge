import { ItemHandler } from '../models/ItemHandler';

export class BackstagePassHandler extends ItemHandler {
    update(): void {
        if (this.item.sellIn > 10) {
            this.increaseQuality();
        } else if (this.item.sellIn > 5) {
            this.increaseQuality(2);
        } else if (this.item.sellIn > 0) {
            this.increaseQuality(3);
        } else {
            this.item.quality = 0;
        }
        this.decreaseSellIn();
    }
}
