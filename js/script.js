document.querySelector("#submitTaskButton").addEventListener("click", function () {
    const inputFieldText = document.querySelector("#inputField").value;
    if(inputFieldText === "") {
        alert("You didn't write anything!");
    } else {
        let newTask = document.createElement("p")
        newTask.classList.add("newTaskStylization")
        newTask.innerText = inputFieldText;
        document.querySelector("#taskHolder").appendChild(newTask);

    }
    document.querySelector("#inputField").value = "";
})