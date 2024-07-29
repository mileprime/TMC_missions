let  todo = [
    {
    name: "clean your room", id:1, selected:false
},
{
    name: "do your missions", id:2, selected:true
},
]
let input = document.querySelector("#input-text");
let update_text = document.querySelector("#update-text");

let addBtn = document.querySelector("#add");
let list = document.getElementById("list");
let deleteBtn = document.getElementById("delete");
let save = document.getElementById("save");
let selectedTask;


addBtn.addEventListener("click", ()=>{
    
    todo.push({name: input.value, selected: false, id: 3});
    displayTodo();
})

input.addEventListener("input",(e)=>{
    console.log(input.value);
let searchValues=todo.filter(item=>{
    return item.name.includes(input.value);
});
 todo = searchValues;
 displayTodo();
});

let displayTodo = () => {

    list.innerHTML = ""
    todo.forEach((task)=>{
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let deleteBtn = document.createElement("button");
        
        deleteBtn.id = "delete";
        deleteBtn.textContent ="delete";
           deleteBtn.addEventListener("click", () => {
     let updatedArray = todo.filter((item)=>{
        return item.id != task.id}
        )
        todo = updatedArray;
        displayTodo();
    });
        checkbox.addEventListener("change",(e)=>{
            if(e.target.checked){
                update_text.value = task.name;
                //loop through the array and update the task with the new task
                selectedTask = task;
                console.log(selectedTask)
                //call displayTodo
            }
        })
        li.textContent = task.name;
        li.appendChild(checkbox);
        li.appendChild(deleteBtn); 
        list.appendChild(li);
    })
   
}



let saveChanges = (task) => {
    let updated = todo.map((item)=>{
        if(item.id == task.id){
            return {...item, name: update_text.value}
        } else {
            return item;
        }      
    })
    todo=updated;
    console.log(updated);
    displayTodo();
};
displayTodo();
    save.addEventListener("click",()=>{
        saveChanges(selectedTask)});
        
   




