let taskArray = [];

refreshTable = () => {
    //function to refresh the table view based on latest data in taskArray - called after adding or deleting task
    console.log("Refresh called");
    tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    taskArrayFromLocal = localStorage.getItem('taskArray');

    
    taskArray = taskArrayFromLocal ? taskArrayFromLocal.split(','): []; // This can cause issues when the task title contains comma
    console.log(taskArray)

    //Loop to create table row for each task
    for (let i = 0; i < taskArray.length; i++) {
        tableRow = document.createElement('tr');
        tableRow.innerHTML = '<td>' + (i + 1) + '</td><td>' + taskArray[i] + '</td><td><button onclick="deleteTask(' + i + ')">Mark as Done</button></td>';
        tableBody.appendChild(tableRow);
    }

}

deleteTask = (i) => {
    //function called when a task is deleted
    console.log("Deleting: task id" + i);
    taskArray.splice(i, 1); //function to delete an element in the array at location i;
    localStorage.setItem('taskArray', taskArray);
    refreshTable();
}

refreshTable();


const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function () {
    //Event listener triggered when the Add Button is clicked
    let taskTitle = document.getElementById('taskTitle').value.trim(); //reading the task title value from the input field
    if(taskTitle){
        taskArray.push(taskTitle); //Inserting taskTitle to Array
        localStorage.setItem('taskArray', taskArray);
        console.log(taskArray);
        refreshTable();
    }
   
})

