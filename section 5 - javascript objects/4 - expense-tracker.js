let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
  account.income = account.income + amount
}

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  if (balance < 0) {
    balance = 0
  }

  return `Account for ${account.name} has $${balance}. $${account.income} in income, and $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 20)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))
