import { LinkedList, Node } from "./linkedLists.js";

class HashMap {
    #buckets;
    #capacity;
    #loadFactor;

    constructor() {
        this.#buckets = [];
        this.#capacity = 16;
        this.#loadFactor = 0.8;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.#capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const hashCode = this.hash(key);
        if (!this.#buckets[hashCode]) {
            this.#buckets[hashCode] = new LinkedList();
        }

        (this.#buckets[hashCode]).append(value);
    }

    get(key) {
        const hashCode = this.hash(key);
        const node = (this.#buckets)[hashCode];

        return node.toString();
    }

    has(key) {
    }

    remove(key) {
    }

    length() {

    }

    clear() { }

    keys() { }

    values() { }

    entries() { }
}

let test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')