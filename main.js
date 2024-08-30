document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add");
    const inputTitle = document.getElementById("input_title");
    const inputAbout = document.getElementById("input_about");
    const noTasks = document.getElementById("no_tasks");
    const tasksContainer = document.getElementById("tasks_container");
    const editMain = document.getElementById("edit");
    const editTitle = document.getElementById("editTitle");
    const editAbout = document.getElementById("editAbout");
    const Opacity = document.getElementById("opacity");
    const editButton2 = document.getElementById("editButton2");
    const close = document.getElementById("close");


    let editingTask = null;
    addButton.addEventListener("click", function () {
        const title = inputTitle.value.trim();
        const about = inputAbout.value.trim();
        
        if(title === "" || about === ""){
            alert("Please fill in both fields.");
            return;
        }

        const task = document.createElement("div");
        task.classList.add("w-[95%]", "border-[#FF8303]", "border-[3px]", "rounded-md", "px-2", "py-1", "flex", "justify-between", "items-center", "bg-[#242320]", );

        const taskContent = document.createElement("div");
        taskContent.style.overflowX = "auto";
        taskContent.id = "bar";
        const taskTitle = document.createElement("h1");
        taskTitle.classList.add("text-2xl", "text-white" , "px-1");
        taskTitle.textContent = title;

        const taskAbout = document.createElement("h1");
        taskAbout.classList.add("text-xl", "text-white" , "px-1");
        taskAbout.textContent = about;

        taskTitle.addEventListener("click", function(){
            taskTitle.classList.toggle("line-through");
            taskTitle.style.color = "#FF8303"
        })

        taskAbout.addEventListener("click", function(){
            taskAbout.classList.toggle("line-through");
            taskAbout.style.color = "#FF8303"
        })

        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskAbout);

        const removeButton = document.createElement("button");
        removeButton.innerHTML = '<i class="ri-close-line"></i>';
        removeButton.style.color = "#FF8303"
        removeButton.classList.add("w-9", "h-9", "bg-[#1B1A17]", "border-[#FF8303]", "border-[3px]", "rounded-md", "flex", "justify-center", "items-center");

        removeButton.addEventListener("click" , function(){
            task.remove()

            if (tasksContainer.children.length === 0) {
                noTasks.style.display = "flex";
                taskContent.style.display = "none";
            }
        });

        
        task.appendChild(taskContent);
        
        tasksContainer.appendChild(task);



        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="ri-edit-line text-[#FF8303]"></i>';
        editButton.classList.add("w-9", "h-9", "bg-[#1B1A17]", "border-[#FF8303]", "border-[3px]", "rounded-md", "flex", "justify-center", "items-center", "mr-2");


        editButton.addEventListener("click", function() {
            editingTask = task;
            editTitle.value = taskTitle.textContent;
            editAbout.value = taskAbout.textContent;
            editMain.style.display = "block";
            Opacity.classList.add("w-[100%]", "h-[100vh]", "absolute", "bg-[#000]", "opacity-70");
        });

        editButton2.addEventListener("click", function() {
            if (editingTask) {
                const updatedTitle = editTitle.value.trim();
                const updatedAbout = editAbout.value.trim();
                if (updatedTitle === "" || updatedAbout === "") {
                    alert("Please fill in both fields.");
                    return;
                }
                editingTask.querySelector("h1.text-2xl").textContent = updatedTitle;
                editingTask.querySelector("h1.text-xl").textContent = updatedAbout;
                editMain.style.display = "none";
                Opacity.classList.remove("w-[100%]", "h-[100vh]", "absolute", "bg-white", "opacity-70");
                editingTask = null;
            }
        });

        close.addEventListener("click" , function(e){
            e.preventDefault();
            editMain.style.display = "none"
            Opacity.classList.remove("w-[100%]", "h-[100vh]", "absolute", "bg-white", "opacity-0");
        })



      
        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("flex")
        buttonContainer.appendChild(editButton)
        buttonContainer.appendChild(removeButton)
        task.appendChild(buttonContainer);


        

        tasksContainer.insertBefore(task, tasksContainer.firstChild)
        
        inputTitle.value = " ";
        inputAbout.value = " ";


        tasksContainer.style.display = "flex";
        noTasks.style.display = "none";


    });

    noTasks.style.display = "flex";
    tasksContainer.style.direction = "none"
    editMain.style.display = "none"

  
});
