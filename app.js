const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", () => {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let liElem = document.createElement("li");
        liElem.innerText = inputBox.value;
        listContainer.appendChild(liElem);

        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        liElem.appendChild(span);
    }
    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName == "I") {
        let container = e.target.parentElement.parentElement.parentElement;
        container.removeChild(e.target.parentElement.parentElement);
        saveData();
    } 
    else if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("list", listContainer.innerHTML);
} 

(function() {
    if (localStorage.getItem("list") == null) {
        localStorage.clear();
    }
    let storedData = localStorage.getItem("list");
    listContainer.innerHTML = storedData;
})();