let taskArray = [];

var addBtnElement = document.getElementById('addBtn');

addBtnElement.addEventListener('click', function () {
    //Event listener triggered when the Add Button is clicked
    console.log('Btn clicked');
    taskTitle = document.getElementById('taskTitle').value; //reading the task title value from the input field
    console.log(taskTitle);
    taskArray.push(taskTitle); //Inserting taskTitle to Array
    console.log(taskArray);
    refreshTable();
})


refreshTable = () => {
    //function to refresh the table view based on latest data in taskArray - called after adding or deleting task
    console.log("Refresh called");
    tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    //Loop to create table row for each task
    for (let i = 0; i < taskArray.length; i++) {
        tableRow = document.createElement('tr');
        tableRow.innerHTML = '<td>' + (i + 1) + '</td><td>' + taskArray[i] + '</td><td><button onclick="deleteTask(' + i + ')">Mark as Done</button></td>';
        tableBody.appendChild(tableRow);
    }

}


deleteTask = (i) => {
    //function called when a task is deleted
    console.log("Delete called" + i);
    taskArray.splice(i, 1); //function to delete an element in the array at location i;
    refreshTable();
}