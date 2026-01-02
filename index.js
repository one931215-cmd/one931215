function showMessage() {
    alert("你點擊了按鈕!");
}

function addbutton() {
    const newBtn = document.createElement("button");
    newBtn.innerText = "新按鈕";
    newBtn.classList.add("generated");
    newBtn.onclick = () => alert("你點了新按鈕！");
    document.body.appendChild(newBtn);
}

function deletebutton() {
    const buttons = document.querySelectorAll(".generated");
    if (buttons.length > 0) {
        const lastButton = buttons[buttons.length - 1];
        lastButton.remove();
    }
}



