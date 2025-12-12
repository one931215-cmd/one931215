function showMessage() {
    alert("你點擊了按鈕!");
}

function addbutton() {
    const newBtn = document.createElement("button");
    newBtn.innerText = "新按鈕";
    newBtn.classList.add("generated");   // 標記它
    newBtn.onclick = () => alert("你點了新按鈕！");
    document.body.appendChild(newBtn);
}


function deletebutton() {
    const buttons = document.querySelectorAll(".generated");
    const lastButton = buttons[buttons.length - 1];

    if (lastButton) {
        lastButton.remove();
    }
}
