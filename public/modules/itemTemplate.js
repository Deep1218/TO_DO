export class Item {
    constructor(id, item, isDone) {
        this.id = id;
        this.item = item;
        this.isDone = isDone;
    }
    getString() {
        let itemObj = {
            id: this.id,
            item: this.item,
            isDone: this.isDone
        };
        let itemString = JSON.stringify(itemObj);
        return itemString;
    }
    setNewItem(value) {
        localStorage.setItem(localStorage.getItem('count'), value);
    }
    updateItem(value) {
        let key = this.id;
        key = key;
        localStorage.setItem(key, value);
    }
}
