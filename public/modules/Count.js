export class Counts {
    constructor(key) {
        this.key = key;
    }
    setCount() {
        if (localStorage.length == 0) {
            localStorage.setItem(this.key, '0');
        }
    }
    updateCount() {
        let count = Number(localStorage.getItem('count')) + 1;
        localStorage.setItem(this.key, String(count));
    }
}
