//declaring variable
let incomeAmount = document.getElementById("incomeAmount");
let incomeName = document.getElementById("income");
let incomeDate = document.getElementById("incomeDate");
let expenseAmount = document.getElementById("expenseAmount");
let expenseName = document.getElementById("expense");
let expenseDate = document.getElementById("expenseDate");
let incomeTable = document.getElementById("incomeTable");
let spentTable = document.getElementById("spentTable");
let totalLeft = document.getElementById("totalLeft");


class BudgetTracker {
    constructor () {
        this.income = [];
        this.expenses = [];
}
//add new income method that will add the users incomes into an array
newIncome(description, date, amount) {
    this.income.push({ 
        description: description, 
        date: date,
        amount: amount,
    });
}
//add new expenses method that will add the users expenses into an array
newExpense(description, date, amount) {
    this.expenses.push({ 
        description: description, 
        date: date,
        amount: amount
    });
}

//calculates the total incomes
totalIncome() {
    let totalIncomeAmount = 0;
    this.income.forEach((element) => {
        totalIncomeAmount = totalIncomeAmount + parseFloat(element['amount']);
    });
    return totalIncomeAmount;
}

//calculates the toal expenses
totalExpense() {
    let totalExpenseAmount = 0;
    this.expenses.forEach((element) => {
        totalExpenseAmount = totalExpenseAmount + parseFloat(element['amount']);
    });
    return totalExpenseAmount;
}

//will subtract the expenses from the income to give you the total budget
totalBalance() {
    let x = this.totalIncome() - this.totalExpense();
    return x;
}

}

const budget = new BudgetTracker();

function addsIncome() {
    let name = incomeName.value;
    let amount = incomeAmount.value;
    let currentDate = incomeDate.value;

    //you cant leave any of the inputs blank or you will get an error alert
    if (!name || !amount || !currentDate) {
        alert("Don't forget to fill out all fields!");
        return;
    }

    //you cant have a negative income amount or youll get an alert
    if (Math.sign(amount) == -1) {
        alert("You can't have a negative income!")
    return;
    }

    //shows the inputs into the html file
    document.getElementById("incomeTable").innerHTML += 
    `
    <div class="income-table">
    <p>${name}</p>
    <p>${currentDate}</p>
    <p>${amount}</p>
    </div>
    `;

    //once inputs are cleared once the button is clicked
    budget.newIncome(currentDate, name, amount);
    incomeName.value = "";
    incomeDate.value = "";
    incomeAmount.value = "";

    document.getElementById("totalLeft").innerText = "$" + budget.totalBalance();
    

}

function addsExpense() {
    let name = expenseName.value;
    let amount = expenseAmount.value;
    let currentDate = expenseDate.value;

    //you cant leave any of the inputs blank or you will get an error alert
    if (!name || !amount || !currentDate) {
        alert("Don't forget to fill out all fields!");
        return;
    }

    //you cant have a negative income amount or youll get an alert
    if (Math.sign(amount) == -1) {
        alert("You can't have a negative income!")
    return;
    }

    //shows the inputs into the html file
    document.getElementById("spentTable").innerHTML += 
    `
    <div class="expense-table">
    <p>${name}</p>
    <p>${currentDate}</p>
    <p>${amount}</p>
    </div>
    `;

    //once inputs are cleared once the button is clicked
    budget.newExpense(currentDate, name, amount);
    expenseName.value = "";
    expenseDate.value = "";
    expenseAmount.value = "";

    document.getElementById("totalLeft").innerText = "$" + budget.totalBalance();
}

