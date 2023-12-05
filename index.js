document.addEventListener("DOMContentLoaded" , function () {
    const taskInput = document.getElementById("input");
    const addBtn = document.getElementById("btn");
    const taskList = document.getElementById("box");
    const clear = document.getElementById("clear");
 
    addBtn.addEventListener("click" , function () {
         const taskText = taskInput.value.trim();
 
         if (taskText !== "") {
             const taskItem = document.createElement("li");
             taskItem.innerText = taskText;
 
             const deleteBtn = document.createElement("button");
             deleteBtn.innerText = "🗑️";
             deleteBtn.classList.add("delete");
             taskItem.appendChild(deleteBtn);
 
             taskItem.addEventListener("click" , function () {
                 taskItem.classList.toggle("complate");
             });
 
             deleteBtn.addEventListener("click" , function () {
                 taskList.removeChild(taskItem);
             });
 
             taskList.appendChild(taskItem);
             taskInput.value = "";
         }
    });
    taskInput.addEventListener("keyup" , function (event) {
         if (event.key === "Enter") {
             addBtn.click();
         }
    });
    clear.addEventListener("click" , function () {
     // $("li").remove();
         // var noteList  = document.querySelectorAll("li").length;
         // console.log(noteList);
         // for (let  i = 0;  i < noteList; i++) {
         //     console.log("1aa");
         //     taskList.removeChild(document.querySelectorAll("li"));
         // }
         
       
    })
 });