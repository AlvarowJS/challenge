import { Item } from './models/Item';
import { GildedRose } from './core/GildedRose';

const items = [
    new Item('Aged Brie', 2, 0),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Sulfuras, Hand of Ragnaros', 0, 40),
    new Item('Normal Item', 10, 20),
    new Item('Conjured', 3, 6)
];

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();

console.log(gildedRose.items);
