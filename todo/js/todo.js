const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('.todo-list')
const likeBtn = document.querySelector('.like')

todoInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        console.log(todoInput.value)
        addList(todoInput.value);
        todoInput.value = ''
    }
})

const addList = (todo) => {
    const li = document.createElement('li');
    const likeSpan = generateList();
    const itemSpan = generateItem(todo);
    const manageSpan = generateSpan();
    li.appendChild(likeSpan);
    li.appendChild(itemSpan);
    li.appendChild(manageSpan);
    todoList.appendChild(li)
}

const generateList = () => {
    const like = document.createElement('span')
    const icon = document.createElement('i')
    like.classList.add('todo-like');
    icon.classList.add('material-icons')
    icon.classList.add('like')
    icon.innerText = 'favorite_border'
    icon.addEventListener('click', () => {
        icon.innerText === 'favorite_border' ? icon.innerText = 'favorite' : icon.innerText = 'favorite_border'
    });
    like.appendChild(icon) 
    return like
}

const generateItem = (todo) => {
    const span = document.createElement('span');
    span.classList.add('todo-item');
    span.innerText = todo
    return span
}

const generateSpan = () => {
    const span = document.createElement('span');
    const check = document.createElement('i');
    const clear = document.createElement('i');
    span.classList.add('todo-manage');
    check.classList.add('material-icons')
    check.classList.add('check')
    clear.classList.add('material-icons')
    clear.classList.add('clear')

    check.innerText = 'check'
    clear.innerText = 'clear'

    span.appendChild(check)
    span.appendChild(clear)

    check.addEventListener('click', () => {
        const li = check.parentNode.parentNode;
        li.classList.add('done')
    })

    clear.addEventListener('click', () => {
        const li = clear.parentNode.parentNode
        todoList.removeChild(li)
    })

    return span
}