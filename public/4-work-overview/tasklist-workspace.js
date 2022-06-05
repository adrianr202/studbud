// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating, estimatedTime, completionStatus) {
  let task = {
    taskDescription,
    createdDate,
    dueDate,
    priorityRating,
    estimatedTime,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);
  // taskList.push(taskDescription)
  // taskList.push(dueDate)
  // taskList.push(priorityRating)
  // taskList.push(estimatedTime)

  // Separate the DOM manipulation from the object creation logic
}

    // Function to display the item on the page
// function renderTask(task) {
//   let item = document.createElement("p");
//   item.innerHTML = "<p>" + task + "</p>";
  
//   tasklist.appendChild(item);

//   // Setup delete button DOM elements
//   let delButton = document.createElement("button");
//   let delButtonText = document.createTextNode("Delete");
//   delButton.appendChild(delButtonText);
//   item.appendChild(delButton); // Adds a delete button to every task

//   // Listen for when the 
//   delButton.addEventListener("click", function(event){
//     item.remove(); // Remove the task item from the page when button clicked
//     // Because we used 'let' to define the item, this will always delete the right element
//   })
  
//   // Clear the value of the input once the task has been added to the page
//   form.reset();
// }

addTask("taskDescription", "createdDate", "dueDate", "priorityRating", "estimatedTime", "completionStatus")

console.log(taskList)