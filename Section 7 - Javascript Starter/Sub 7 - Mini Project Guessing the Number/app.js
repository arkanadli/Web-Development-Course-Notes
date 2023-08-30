
let runApp = true;
let toDoList = ["Buy New Turtle"];
let action = null;
while (runApp) {
    if (action === "quit") {
        runApp = false;
        alert("You Quit The App");
        console.log("You Quit The App")
    } else if (action === "new") {
        let newToDo = prompt("Enter New To Do");
        toDoList.push(newToDo);
        console.log(`${newToDo} added to list`);
        action = null;
    } else if (action === "list") {
        console.log('**********')
        for (list of toDoList) {
            console.log(`${toDoList.indexOf(list)}: ${list}`)
        }
        console.log('**********')
        action = null;
    } else if (action === "delete") {
        let indexInput = prompt("Enter index of todo to delete")
        let indexToDelete = parseInt(indexInput);
        if (!(indexToDelete == NaN)) {
            toDoList.splice(indexToDelete, 1);
            console.log("Todo Removed")
            action = null;
        } else {
            console.log("Unknown Index")
        }
    } else if (action == null) {
        action = prompt("What would you like to do?");
    }
    else {
        action = prompt("Enter Valid Action! :");
    }
}