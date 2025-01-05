import { Item } from '../models/Item';
import { ItemHandler } from '../models/ItemHandler';
import { AgedBrieHandler } from '../handlers/AgedBrieHandler';
import { BackstagePassHandler } from '../handlers/BackstagePassHandler';
import { SulfurasHandler } from '../handlers/SulfurasHandler';
import { NormalItemHandler } from '../handlers/NormalItemHandler';
import { ConjuredItemHandler } from '../handlers/ConjuredItemHandler';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Array<Item> {
        for (let item of this.items) {
            const handler = this.getItemHandler(item);
            handler.update();
        }
        return this.items;
    }

    private getItemHandler(item: Item): ItemHandler {
        switch (item.name) {
            case 'Aged Brie':
                return new AgedBrieHandler(item);
            case 'Sulfuras, Hand of Ragnaros':
                return new SulfurasHandler(item);
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstagePassHandler(item);
            default:
                if (item.name.indexOf('Conjured') !== -1) {
                    return new ConjuredItemHandler(item);
                }
                return new NormalItemHandler(item);
        }
    }
}
