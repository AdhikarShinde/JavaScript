const account = {
    name: 'Adhikar Shinde',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
             this.expenses.push({
            description: description,
              amount: amount
        })
    },
    addIncome: function(description, amount){
         this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
          let totalAmountExpenses = 0
          let totalAmountIncome = 0
          this.income.forEach(function(income) {
            totalAmountIncome = income.amount + totalAmountIncome

        })
          this.expenses.forEach(function(expense){
         
            totalAmountExpenses = expense.amount + totalAmountExpenses
        })
      
          const totalAmountBalance = totalAmountIncome - totalAmountExpenses
        return (`${this.name} has a balance of ₹${totalAmountBalance}. ₹${totalAmountIncome} in income. ₹${totalAmountExpenses} in expenses.`)
    }
}

account.addExpense('Rent', 2500)
account.addExpense('Coffe', 1500)
account.addIncome('Job', 10000)
console.log(account.getAccountSummary())

