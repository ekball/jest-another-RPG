const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    // returns an object with various player properties (Option 1)
    // this.getStats = function() {

    //     return {
    //         potions: this.inventory.length,
    //         health: this.health, 
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // returns an object with various player properties (Option 2)
    Player.prototype.getStats = function () {

        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // return the inventory array or false if empty (Option 1)
    // this.getInventory = function () {

    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };

    // return the inventory array or false if empty (Option 2)
    Player.prototype.getInventory = function () {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

}

module.exports = Player;