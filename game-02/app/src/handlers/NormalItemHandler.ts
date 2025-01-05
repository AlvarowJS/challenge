import { ItemHandler } from '../models/ItemHandler';

export class NormalItemHandler extends ItemHandler {
    update(): void {
        this.decreaseQuality();
        this.decreaseSellIn();
        
        if (this.item.sellIn < 0) {
            this.decreaseQuality();
        }
    }
}
