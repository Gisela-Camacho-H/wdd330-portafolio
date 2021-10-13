var taskInput = document.querySelector('#new-task');
var addButton = taskInput.nextElementSibling;
var tasksHolders = document.querySelectorAll('ul');
var incompleteTaskHolder = tasksHolders[0];
var completeTaskHolder = tasksHolders[1];

var addTask = function(){
    var listItem = document.createElement('li');
    var checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    var label = document.createElement('label')
    label.innerText = taskInput.value
    var deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    deleteButton.className = 'delete'
    deleteButton.onclick = deleteTask


    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    incompleteTaskHolder.appendChild(listItem)
}
// Delete tast
var deleteTask = function(){
    console.log("task deleted");
    var currentButton = this
    var listItem = currentButton.parentNode
    var unorderedList = listItem.parentNode
    unorderedList.removeChild(listItem)

}
addButton.addEventListener('click', addTask)

for (let i = 0; i < completedTaskHolder.children.length; i++) {
    const task = completedTaskHolder.children[i];
    task.lastElementChild.onclick = deleteTask
}
for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    const task = incompleteTaskHolder.children[i];
    task.lastElementChild.onclick = deleteTask
}