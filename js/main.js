const input = document.querySelector('[data-todo-input]');
const addBtn = document.querySelector('[data-todo-add-btn]');
const container = document.querySelector('[data-todo-container]');

const keyName = 'todoItems'
const todoItems = getLocalStorageItem() || []

function setLocalStorageItem(key = keyName, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageItem(key = keyName) {
  return JSON.parse(localStorage.getItem(key));
}

function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function render() {
    container.innerHTML = '';
    
    if (todoItems.length === 0) {
        const emptyTextHeader = createElement('h2', 'Список пуст');
        emptyTextHeader.style.textAlign = 'center';
        container.append(emptyTextHeader);
        return;
    }
    
    todoItems.forEach((item, index) => {
        const itemElement = createElement('li', undefined);
        const itemText = createElement('p', item)
        const btnElement = createElement('button', '❌');
        
        itemElement.classList.add('todo__container-item');
        itemText.classList.add('todo__container-item-text')
        btnElement.classList.add('todo__container-delete-btn');
        
        btnElement.addEventListener('click', () => {
            todoItems.splice(index, 1);
            setLocalStorageItem(keyName, todoItems);
            render();
        });
        
        itemElement.append(itemText);
        itemElement.append(btnElement);
        container.append(itemElement);
    })
}

function clickAddButton() {
    const text = input.value.trim()
    input.value = ''

    if (!text) {
      return
    }

    todoItems.push(text)
    setLocalStorageItem(keyName, todoItems)
    render()
}

function init() {
    addBtn.addEventListener('click', () => clickAddButton())
}

init();
render();