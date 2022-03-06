import { Item } from "./itemTemplate.js";

export class ListTemplate {
    constructor(
        private container : HTMLUListElement
    ){}

    render(id: string, heading: string, check: boolean): void{
        // li tag
        const li = document.createElement('li');
        li.className = 'task';
        li.id= id;
        // i tag for icon
        const i = document.createElement('i');
        i.className = "fa-solid fa-xmark";
        // div tag for cross icon
        const div2 = document.createElement('div');
        div2.className = 'remove-icon';
        div2.append(i);
        // h2 tag
        const h2 = document.createElement('h2');
        h2.textContent = heading;
        if(check){
            h2.className = 'checked';
        }
        // input tag (checkbox)
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'check-box';
        input.id = 'isDone';
        if(check){
            input.checked = true;
        }
        // div for task
        const div = document.createElement('div');
        div.className = 'task-container';
        div.append(input);
        div.append(h2);
        div.append(div2);
        
        li.append(div);
        
        this.container.append(li);
        // if(check){
        //     this.container.append(li);
        // }
        // else{
        //     this.container.prepend(li);
        // }
    }
    isEmpty(heading: string): void{
        const li = document.createElement('li');
        li.className = 'no-task';
        const h2 = document.createElement('h2');
        h2.textContent = heading;
        li.append(h2);
        this.container.append(li)
        console.log(heading);
    }
    remove(): void{
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.firstChild!);
        }
    }
    private checkBoxEv(element: HTMLInputElement) {
        let updateItem: Item;
        if(element.checked){
            let li = <HTMLLIElement> element.parentNode?.parentNode;
            let id: string = <string> li.id;
            let itemObj = JSON.parse(localStorage.getItem(id)!);
            if(!itemObj.isDone){
                let values: [number, string, boolean] = [Number(id), itemObj.item, true];
                updateItem  = new Item(...values);
                updateItem.updateItem(updateItem.getString());
            }
        } else{
            let li = <HTMLLIElement> element.parentNode?.parentNode;
            let id: string = <string> li.id;
            let itemObj = JSON.parse(localStorage.getItem(id)!);
            if(itemObj.isDone){
                let values: [number, string, boolean] = [Number(id), itemObj.item, false];
                updateItem  = new Item(...values);
                updateItem.updateItem(updateItem.getString());
            }
        }
    }
    private removeLi(i: HTMLElement): void{
        let li = <HTMLLIElement> i.parentNode?.parentNode?.parentNode;
        let id: string = <string> li.id;
        localStorage.removeItem(id);        
    }
    onClick(target: HTMLElement): void{
        let tag = target.tagName;
        switch (tag) {
            case "INPUT":
                let element: HTMLInputElement = <HTMLInputElement> target;
                this.checkBoxEv(element);
                return;
            case "I":
                this.removeLi(target);
                return;
        }
    }
}