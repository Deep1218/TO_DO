import { hasItemObject } from "../interface/hasItemObj.js";
import { hasGetter } from "../interface/hasGetter.js";

export class Item implements hasGetter{
    constructor(
        readonly id: number,
        readonly item: string,
        readonly isDone: boolean
    ){}

    getString(): string {
        let itemObj: hasItemObject = {
            id: this.id,
            item: this.item,
            isDone: this.isDone
        }
        let itemString: string = JSON.stringify(itemObj); 
        return itemString;   
    }
    public setNewItem(value: string): void{
        localStorage.setItem(localStorage.getItem('count')!, value);
    }
    updateItem(value: string): void{
        let key: any = this.id;
        key = <string> key;
        localStorage.setItem(key, value)
    }
    // deleteItem(): void{
    //     let key: any = this.id;
    //     key = <string> key;
    //     localStorage.removeItem(key);
    // }
}