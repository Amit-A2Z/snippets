//singleton.js
let instance = null;

class Singleton {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    // other methods and properties...
}

module.exports = Singleton;
