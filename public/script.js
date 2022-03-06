import { Counts } from "./modules/countTemplate.js";
import { Item } from "./modules/itemTemplate.js";
import { ListTemplate } from "./modules/listTemplate.js";
const item = document.querySelector('#Item');
const addBtn = document.querySelector('.add-icon');
const taskList = document.querySelector('.taskList');
let count = new Counts('count');
const list = new ListTemplate(taskList);
// To load and reload the Ul list
const loadList = () => {
    let idArr = [];
    Object.keys(localStorage).forEach((key) => {
        if (key !== 'count') {
            let tempObj = JSON.parse(localStorage.getItem(key));
            idArr.push(tempObj.id);
        }
    });
    console.log(idArr.length);
    if (idArr.length !== 0) {
        console.log("In");
        idArr = idArr.sort().reverse();
        list.remove();
        for (let i = 0; i <= idArr.length; i++) {
            Object.keys(localStorage).forEach((key) => {
                if (key !== 'count') {
                    let tempObj = JSON.parse(localStorage.getItem(key));
                    if (idArr[i] == tempObj.id) {
                        list.render(tempObj.id, tempObj.item, tempObj.isDone);
                    }
                }
            });
        }
    }
    else {
        list.remove();
        list.isEmpty('Oop!! no items found');
    }
};
// Add item to the storage and list
const itemToStorage = () => {
    //Input is empty
    if (item.value.trim()) {
        //for local storage key
        count.updateCount();
        let values = [Number(localStorage.getItem('count')), item.value, false];
        //class Item which handle the conversion and storing of the item
        let newItem = new Item(...values);
        newItem.setNewItem(newItem.getString());
        item.value = '';
        // function to reload the ul list
        loadList();
    }
    else {
        //if value has any space then remove
        if (item.value) {
            item.value = '';
        }
        //alert that value is valid
        item.style.borderColor = 'red';
        setTimeout(() => { item.style.borderColor = ''; }, 1000);
    }
};
loadList();
addBtn.addEventListener('click', itemToStorage);
taskList.addEventListener('click', (e) => {
    list.onClick(e.target);
    loadList();
});
