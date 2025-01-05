import { expect } from "chai";
import { GildedRose } from "../src/core/GildedRose";
import { Item } from "../src/models/Item";

describe("GildedRose", () => {
    it("should decrease quality and sellIn for a normal item", () => {
        const items = [new Item("Normal Item", 10, 20)];
        const gildedRose = new GildedRose(items);
        
        gildedRose.updateQuality();
        
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(19);
    });

    it("should handle Aged Brie increasing in quality", () => {
        const items = [new Item("Aged Brie", 10, 30)];
        const gildedRose = new GildedRose(items);
        
        gildedRose.updateQuality();
        
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(31);
    });

    it("should handle Sulfuras quality and sellIn remaining constant", () => {
        const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
        const gildedRose = new GildedRose(items);
        
        gildedRose.updateQuality();
        
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    });

    it("should handle Backstage passes quality correctly", () => {
        const items = [
            new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
        ];
        const gildedRose = new GildedRose(items);
        
        gildedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
        expect(items[1].quality).to.equal(12);
        expect(items[2].quality).to.equal(13);
        expect(items[3].quality).to.equal(0);
    });

    it("should degrade Conjured items twice as fast", () => {
        const items = [new Item("Conjured", 10, 20)];
        const gildedRose = new GildedRose(items);
        
        gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(18);
    });
});
