let input = document.querySelector("#note-input");
let addBtn = document.querySelector("#addbutton");
let searchInput = document.querySelector("#search-input");



let notes = [];

let count = 0; //object to store references to note elements
let deleteId = null;
let editId = null;


addBtn.addEventListener("click", () => {
    let userInput = input.value; 
    let noteId = count++;
    notes.push({id: noteId, userInput});
    displayNote();
  
    console.log(userInput);
});

searchInput.addEventListener("input", (e)=>{
    let searchValue = notes.filter(item=>{
        return item.includes(searchInput.value);
    });
    notes = searchValue;
    displayNote();
})

  let displayNote = () => {
    let noteList = document.getElementById("list");
    noteList.innerHTML = "";

    notes.forEach(({id, userInput}) => {

        let li = document.createElement("li");
        let noteContainer = document.createElement("div");
        li.appendChild(noteContainer)
        noteContainer.classList="d-flex just";

        let noteText = document.createElement("div");
        noteText.classList="d-flex";
        noteContainer.appendChild(noteText);

        let check = document.createElement("input");
        check.type = "checkbox";
        noteText.appendChild(check);

        let p =document.createElement("p");
        p.textContent = userInput;
        noteText.appendChild(p);

        noteList.appendChild(li);
     

        let actionIcons = document.createElement("div");
        noteContainer.appendChild(actionIcons);

        let editIcon = document.createElement("img");
        editIcon.src = "./edit.svg";
        actionIcons.appendChild(editIcon);

        let deleteIcon = document.createElement("img");
        deleteIcon.src = "./trash.svg";
        actionIcons.appendChild(deleteIcon);

        editIcon.addEventListener("click", () => {
            const editModal = new bootstrap.Modal(
                document.getElementById("editModal")
            );
            
            document.querySelector("#edit-input").value = userInput;
            editId = id;
            editModal.show();
        });

        deleteIcon.addEventListener("click", ()=>{
            const deleteModal = new bootstrap.Modal(
                document.getElementById("deleteModal")
            );
            deleteModal.show();
            deleteId = id;
        })

    });

  }
displayNote();

  let deleteNote = (id) => {
     notes = notes.filter((note) =>{
        return note.id !== id;
    })
    displayNote();
  }

  let deleteBtn = document.querySelector("#deleteBtn");

  deleteBtn.addEventListener("click", () =>{
    deleteNote(deleteId);
    console.log("delete button clicked", deleteId);
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.hide();
  })

  let editNote = (noteid, updatedNoteText) => {
    let note = notes.find((note) => note.id == noteid);
    if (note) {
        note.userInput = updatedNoteText;
    }
    displayNote();
};

  let updateNote = document.getElementById("editbutton");
  let editInput = document.getElementById("edit-input");
  
  updateNote.addEventListener("click", () => {
      let updatedNoteText = editInput.value;
      if (updatedNoteText !== "") {
          editNote(editId, updatedNoteText);
          const editModal = new  bootstrap.Modal(document.getElementById("editModal"));
          editModal.hide(); // Hide the modal using Bootstrap 4
      }
  });
  

