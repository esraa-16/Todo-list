const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function createTaskElement(taskText) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    const taskDescription = document.createElement('span');
    taskDescription.className = 'complete';
    taskDescription.textContent = taskText;
    taskDescription.addEventListener('click', () => {
        taskCard.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskCard.style.transition = 'opacity 0.5s';
        taskCard.style.opacity = 0;
        setTimeout(() => taskCard.remove(), 500);
    });

    taskCard.appendChild(taskDescription);
    taskCard.appendChild(deleteButton);
    return taskCard;
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskCard = createTaskElement(taskText);
        taskList.appendChild(taskCard);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});