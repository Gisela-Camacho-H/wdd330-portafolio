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
var deleteTask = function() {
    

}
addButton.addEventListener('click', addTask)