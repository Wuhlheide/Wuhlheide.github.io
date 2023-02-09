const balanceElement = document.querySelector("#balance #amount");
const transactionInput = document.querySelector("#transactionInput");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const transactionsList = document.querySelector("#transactions");

let balance = localStorage.getItem("balance") || 0;
balance = parseFloat(balance);

updateBalance();

addButton.addEventListener("click", function () {
    const transactionAmount = parseFloat(transactionInput.value);
    if (!isNaN(transactionAmount)) {
        balance += transactionAmount;
        localStorage.setItem("balance", balance);
        updateBalance();
        addTransaction(transactionAmount, "add");
    }
});

subtractButton.addEventListener("click", function () {
    const transactionAmount = parseFloat(transactionInput.value);
    if (!isNaN(transactionAmount)) {
        balance -= transactionAmount;
        localStorage.setItem("balance", balance);
        updateBalance();
        addTransaction(transactionAmount, "subtract");
    }
});

function updateBalance() {
    balanceElement.innerHTML = balance.toFixed(2) + " €";
}

function addTransaction(amount, type) {
    const transactionElement = document.createElement("li");
    transactionElement.innerHTML = type === "add" ? "+" + amount.toFixed(2) + " €" : "-" + amount.toFixed(2) + " €";
    transactionsList.appendChild(transactionElement);
}
