const addBtn = document.getElementById('taskSubmitBtn');
const taskInput = document.getElementById('taskInput');
const content = document.getElementById('content');

taskInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
        addBtn.click();
        event.preventDefault();
    }
})

var globalCounter = 0;

const taskTemplate = (taskTitle, counter) => [
    `<div id="task" class="task task-${counter}">`,
    `   <span class="task-counter">${counter}</span>`,
    `   <h3>${taskTitle}</h3>`,
    `</div>`
].join('')

addBtn.addEventListener('click', () => {
    if (taskInput.value !== '') {
        const appendTask = (message) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = taskTemplate(message, globalCounter + 1);
            return wrapper.firstChild;
        }

        const task = appendTask(taskInput.value);

        task.addEventListener('click', () => {
            task.parentNode.removeChild(task);
        })

        content.append(task);

        taskInput.value = '';

        globalCounter = globalCounter + 1;
    }
})