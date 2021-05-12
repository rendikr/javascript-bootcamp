const account = {
  name: 'Andrew Mead',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })

    const accountBalance = totalIncome - totalExpenses

    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income, and $${totalExpenses} in expenses.`
  },
}

account.addIncome('Job Salary', 1200)
account.addIncome('Freelance', 50)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Lunch', 24)
console.log(account)
console.log(account.getAccountSummary())
