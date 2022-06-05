// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
// Task Title
var taskTitle = document.getElementById("taskTitle");

// Task Description
var taskDescription = document.getElementById("taskDescription");

// Due Date
var taskDueDate = document.getElementById("dueDateInput");

// Estimated Time
var taskEstimated = document.getElementById("estimatedTimeInput");

// Completion Time
var taskCompletion= document.getElementById("completionTimeInput");

// Category
var taskCategory = document.getElementById("categoryInput");

// Priority
var taskPriority = document.getElementById("priorityInput");

// Status
var taskStatus = document.getElementById("statusInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  let title = taskTitle.value;
  let description = taskDescription.value;
  let due = taskDueDate.value;
  let estimatedTime = taskEstimated.value;
  let completion = taskCompletion.value;
  let categoryInput = taskCategory.value;
  let priority = taskPriority.value;
  let status = taskStatus.value;


  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format

  // Call the addTask() function using
  addTask(title, description, date, due, estimatedTime, completion, categoryInput, priority, status);
  // addTask();

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskTitle, taskDescription, createdDate, dueDate, estimatedTime, completionTime, categoryInput, priorityInput, completionStatus) {
  let task = {
    taskTitle,
    taskDescription,
    createdDate,
    dueDate,
    estimatedTime,
    completionTime,
    categoryInput,
    priorityInput,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  return task;
}

// Function to display the item on the page
function renderTask(task) {
  let item = document.createElement("p");
  item.innerHTML = "<p>" + task.taskTitle + "</p>";
  
  tasklist.appendChild(item);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}