// Initialize the variables using querySelector
let newTask = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTaskButton");
let list = document.querySelector("#taskList");

// Initialize empty array
let tasksArray = [];

// Add event listener to the button
addBtn.addEventListener("click", () => {
    // Get the input from the user
    let userInput = newTask.value;

    if (userInput !== "") {
        // Check if the task already exists in the array
        // if (tasksArray.includes(userInput)) {
        //     alert("Task already exists!");
        //     return;
        // }

        // Add the input value to the array
        tasksArray.push(userInput);

        // Clear the current list
        list.innerHTML = "";

        // Loop through the array of items
        tasksArray.forEach(item => {
            // Create li tag
            let listItem = document.createElement("li");
            listItem.className = "d-flex justify-content-between align-items-center";

            // Give the li value
            listItem.textContent = item;

            // Create remove button
            let removeBtn = document.createElement("button");
            removeBtn.className = "btn btn-danger btn-sm";
            removeBtn.textContent = "Remove";

            // Add the button to the li tag item
            listItem.appendChild(removeBtn);

            // Add the li to the ul parent tag
            list.appendChild(listItem);

            // Add event listener to the remove button
            removeBtn.addEventListener("click", () => {
                // Remove the item from the array
                tasksArray = tasksArray.filter(task => task !== item);

                // Remove the item from the list
                listItem.remove();
            });
        });

        // Clear the input field
        newTask.value = "";
    } else {
        alert("Please enter a task.");
    }
});
