var { Shop, Item } = require('../src/gilded_rose.js');


// TEST 1 : Does the quality drops by 1 ?
describe("Gilded Rose", function() {
    it("quality drops by 1", function() {
        const gildedRose = new Shop([new Item("Babybel", 8, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
    });
});
// TEST 2 : Does the quality increases by 1 for the items where this is the case
describe("Gilded Rose", function() {
    it("Backstage passes quality increases by 1", function() {
        const gildedRose = new Shop([new Item("Backstage passes", 12, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    });
});

// TEST 3 : Does the quality increases by 3 when there are 5 days or less left (Backstage passes)
describe("Gilded Rose", function() {
    it("Backstage passes quality increases by 3 when there are 5 days or less", function() {
        const gildedRose = new Shop([new Item("Backstage passes", 6, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(5);
    });
});
// TEST 4 : Does the quality of Sulfuras not change
describe("Gilded Rose", function() {
    it("quality of Sulfuras not change", function() {
        const gildedRose = new Shop([new Item("Sulfuras", 6, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
    });
});
// TEST 5 : Does the quality drops by 2 when Sell In = 0 ?
describe("Gilded Rose", function() {
    it("quality drops by 2 when Sell In = 0", function() {
        const gildedRose = new Shop([new Item("Babybel", 0, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
    });
});

// TEST 6 : Does the maximum quality is 50 ?
describe("Gilded Rose", function() {
    it("maximum quality is 50", function() {
        const gildedRose = new Shop([new Item("Babybel", 15, 60)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });
});
// TEST 7 : Does the minimum quality is 0 ?
describe("Gilded Rose", function() {
    it("minimum quality is 0", function() {
        const gildedRose = new Shop([new Item("Babybel", 15, -3)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});
// TEST 8 : Does the quality = 0 when there are 0 days left (Backstage passes)
describe("Gilded Rose", function() {
    it("Backstage passes quality increases by 3 when there are 5 days or less", function() {
        const gildedRose = new Shop([new Item("Backstage passes", 1, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});
// TEST 9 : Does the quality increases by 2 when there are between 10 and 6 days left (Backstage passes)
describe("Gilded Rose", function() {
    it("Backstage passes quality increases by 2 when there are between 10 and 6 days left", function() {
        const gildedRose = new Shop([new Item("Backstage passes", 7, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(4);
    });
});