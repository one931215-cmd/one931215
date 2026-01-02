function greetUser() {
    // 1. 抓取輸入框和要顯示文字的區域
    const inputElement = document.getElementById("userName");
    const displayArea = document.getElementById("result");
    
    // 2. 取得名字
    const name = inputElement.value;

    if (name.trim() === "") {
        alert("請先輸入名字喔！");
    } else {
        // 3. 直接將內容輸出到 HTML 中
        // 這裡就是您要的：名字 + "期末一起PASS"
        displayArea.innerHTML = `${name} 期末一起 PASS 吧！🔥`;
        
        // 如果想讓名字變色，可以這樣寫：
        // displayArea.innerHTML = `<span style="color:blue;">${name}</span> 期末一起 PASS 吧！`;
    }
}

// 您原本的其他功能
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
