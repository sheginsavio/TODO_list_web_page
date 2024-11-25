const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task !== '') {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        li.appendChild(taskSpan);

        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.classList.add('finish-btn');
        li.appendChild(finishBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = '';

        finishBtn.addEventListener('click', () => {
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.opacity = '0.6';
            finishBtn.remove();
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    } else {
        alert('Please enter a task!');
    }
});
