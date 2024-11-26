function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        li.onclick = () => {
            if (confirm("Are you sure you want to delete this task?")) {
                li.remove();
            }
        };
        

        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}
