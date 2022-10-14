const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        value === undefined ? this.arr.push('()') : this.arr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (isNaN(position) === true || Number.isInteger(position) === false || this.arr[position - 1] === undefined) {
            this.arr = [];
            throw new Error("You can't remove incorrect link!");
        } else {
            this.arr.splice(position - 1, 1);
            return this;
        };
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let chain = this.arr.join('~~');
        this.arr = [];
        return chain;
    }
};

module.exports = {
    chainMaker
};