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

        // That's if we have two similar keys
        let unique = this.#buckets[hashCode].find(key);
        if (unique) {
            (this.#buckets[hashCode]).removeAt(unique[1]);
            (this.#buckets[hashCode]).insertAt([key, value], unique[1]);
            return;
        }

        (this.#buckets[hashCode]).prepend([key, value]);

        // That's if loadFactor * capacity < HashMap Entries
        if (Math.round(this.#capacity * this.#loadFactor) === this.length()) {
            this.#capacity = this.#capacity * 2;
            // Rehashing
            const allEntries = this.entries();
            this.clear();
            allEntries.forEach(entry => {
                const reHashCode = this.hash(entry[0]);
                if (!this.#buckets[reHashCode]) {
                    this.#buckets[reHashCode] = new LinkedList();
                }
                this.#buckets[reHashCode].prepend([entry[0], entry[1]]);
            });
        }
    }

    get(key) {
        const hashCode = this.hash(key);
        const list = (this.#buckets)[hashCode];
        return list.find(key)[0];
    }

    has(key) {
        const hashCode = this.hash(key);
        const list = (this.#buckets)[hashCode];

        return list ? true : false;
    }

    remove(key) {
        const hashCode = this.hash(key);
        if (!(this.#buckets)[hashCode]) return false;
        (this.#buckets).splice(hashCode, 1);
        return true;
    }

    length() {
        const buckets = this.#buckets;
        let bucketsLength = 0;

        buckets.filter(item => item instanceof LinkedList).forEach(list => {
            bucketsLength += list.size();
        });

        return bucketsLength;
    }

    clear() {
        this.#buckets = [];
    }

    keys() {
        const allKeys = [];
        const hashMapEntries = this.#buckets;
        hashMapEntries.filter(entry => entry instanceof LinkedList).forEach(entry => {
            let list = entry.head;
            while (list !== null) {
                allKeys.push(list.value[0]);
                list = list.nextNode;
            }
        });
        return allKeys;
    }

    values() {
        const allValues = [];
        const hashMapEntries = this.#buckets;
        hashMapEntries.filter(entry => entry instanceof LinkedList).forEach(entry => {
            let list = entry.head;
            while (list !== null) {
                allValues.push(list.value[1]);
                list = list.nextNode;
            }
        });
        return allValues;
    }

    entries() {
        const allEntries = [];
        const allKeys = this.keys();
        const allValues = this.values();

        let counter = 0;

        allKeys.forEach(key => {
            allEntries[counter] = [key, allValues[counter]];
            counter += 1;
        })

        return allEntries;
    }
}

export { HashMap }