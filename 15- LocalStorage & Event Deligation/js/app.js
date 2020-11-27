const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) ||  [];
const checkAllButton = document.getElementById('check-all');
const uncheckAllButton = document.getElementById('uncheck-all');

function addItem(e){
    e.preventDefault();

    const inputValue = (this.querySelector('[name= "item"]')).value;

    const item = {
        name : inputValue,
        done : false
    }

    items.push(item);
    // console.log(items)
    displayItems(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset();

}

function displayItems (plates = [], plateList){
    plateList.innerHTML = plates.map( (plate, index) => {
        return`
            <li>
            <input type="checkbox" data-index=${index} id="item${index}"  ${plate.done ? 'checked' : '' }/>
            <label for="item${index}"> ${plate.name}</label>
            <button data-index=${index} id="item${index}" >DEL</button>
            </li>
            
        `;
    }).join('');
}

function toggleDone (e){
    //if the click is not on input skip it
    if(!e.target.matches('input')) return
    // console.log(e.target.dataset.index)
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList)
}

function deleteItem (e){
    
    if (!e.target.matches('button')) return;
    // console.log(e.target)
    const index = e.target.dataset.index;
    console.log(index)
    // console.log(items.slice(index ))
    // console.log(items.splice(index ))
    items.splice(index , 1)
    console.log(items)
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList)
    

}

function checkAll (e){
    items.forEach(item => {
        item.done = true;
    });
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList)
}
function uncheckAll (e){
    items.forEach(item => {
        item.done = false;
    });
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList)
}

addItems.addEventListener('submit', addItem);
displayItems(items, itemsList);
itemsList.addEventListener('click', toggleDone)
itemsList.addEventListener('click', deleteItem)
checkAllButton.addEventListener('click', checkAll)
uncheckAllButton.addEventListener('click', uncheckAll)