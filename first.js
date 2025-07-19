
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
      alert("Please enter a task");
      return;
    }


    const li = document.createElement("li");
    li.textContent = taskValue;
    li.style.listStyle = "none";
    li.style.padding = "10px";
    li.style.margin = "10px auto";
    li.style.backgroundColor = "#e3e3e3";
    li.style.borderRadius = "10px";
    li.style.width = "100%";
    li.style.position = "relative";

   
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.position = "absolute";
    delBtn.style.right = "5px";
    delBtn.style.top = "10px";
    delBtn.style.border = "none";
    delBtn.style.fontSize = "16px";
    delBtn.style.background = "transparent";
    delBtn.style.cursor = "pointer";
  
    delBtn.onclick = () => {
      li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    
    taskInput.value = "todo list";
  }

