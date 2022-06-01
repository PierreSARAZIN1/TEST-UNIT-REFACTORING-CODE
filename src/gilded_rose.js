// import analyseName from './features/analyseName';
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        const regex = /Conjured/;
        if (((this.items[0].name).match(regex)) != null) {
            conjuredName(this.items)
        } else if ((this.items[0].name) === "Aged Brie") {
            agedBrieName(this.items)
        } else if ((this.items[0].name) === "Sulfuras") {
            sulfurasName(this.items)
        } else if ((this.items[0].name) === "Backstage passes") {
            backstagePassesName(this.items)
        } else {
            normalName(this.items)
        }
        return this.items;
    };
};

const agedBrieName = (value) => {
    nextDay(value)
    value[0].quality += 1
    qualiMin(value)
    qualiMax(value)
};

const sulfurasName = (value) => {
    qualiMin(value)
    qualiMax(value)
};

const backstagePassesName = (value) => {
    nextDay(value)
    if (value[0].sellIn === 0) {
        value[0].quality = 0
    } else if (value[0].sellIn <= 5) {
        value[0].quality += 3
    } else if (value[0].sellIn <= 10) {
        value[0].quality += 2
    } else {
        value[0].quality += 1
    }
};

const conjuredName = (value) => {
    nextDay(value)
    value[0].quality -= 2
    qualiMin(value)
    qualiMax(value)
};

const normalName = (value) => {
    nextDay(value)
    if (value[0].sellIn <= 0) {
        value[0].quality -= 2
    } else {
        value[0].quality -= 1
    }
    qualiMin(value)
    qualiMax(value)
};

const qualiMin = (value) => {
    if (value[0].quality < 0) {
        value[0].quality = 0
    }
};

const qualiMax = (value) => {
    if (value[0].quality > 50) {
        value[0].quality = 50
    }
};

const nextDay = (value) => {
    value[0].sellIn -= 1
    if (value[0].sellIn <= 0) {
        value[0].sellIn = 0
    }
}

module.exports = {
    Item,
    Shop
};