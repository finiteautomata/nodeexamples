Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

function herald() {
    phrases = [
        "Up and running, sir",
        "M'lord, we're up",
        "No need to compile this, master. We are on"
    ];

    console.log(phrases.randomElement());

    return;
}

module.exports = herald;
