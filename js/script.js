document.querySelector("#submitTaskButton").addEventListener("click", function () {
    const inputFieldText = document.querySelector("#inputField").value;
    if (inputFieldText === "") {
        alert("You didn't write anything!");
    } else {
        let newTask = document.createElement("input")
        newTask.classList.add("inputField");
        newTask.setAttribute("value", inputFieldText);
        newTask.disabled = true;

        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.innerText = "del";
        deleteTaskButton.classList.add("button");
        deleteTaskButton.addEventListener("click", function () {
            document.querySelector("#taskHolder").removeChild(newTask);
            document.querySelector("#taskHolder").removeChild(deleteTaskButton);
            document.querySelector("#taskHolder").removeChild(editTaskButton);
        });

        const editTaskButton = document.createElement("button");
        editTaskButton.innerText = "edit";
        editTaskButton.classList.add("button");
        editTaskButton.addEventListener("click", function () {
            newTask.disabled = !newTask.disabled;
        });

        document.querySelector("#taskHolder").appendChild(newTask);
        document.querySelector("#taskHolder").appendChild(deleteTaskButton);
        document.querySelector("#taskHolder").appendChild(editTaskButton);
    }
    document.querySelector("#inputField").value = "";
})