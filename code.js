const form = document.forms["myForm"]
const input = form["task"]
const taskList = document.getElementById("taskList")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const val = input.value
    const newLi = document.createElement("li")
    newLi.innerHTML = "<i onclick=\"checkTask(this)\" style=\"float: left;\" class=\"fa-solid fa-check\"></i>" + val + "<i onclick=\"deleteTask(this)\" style=\"float: right;\" class=\"fa-solid fa-xmark\"></i>" 

    taskList.appendChild(newLi)
})

function deleteTask(element) {
    element.parentElement.remove()
}

function checkTask(element) {
    if (element.parentElement.style.textDecoration == "line-through") {
        element.parentElement.style.textDecoration = "none"
    } else {
        element.parentElement.style.textDecoration = "line-through"
    }
}