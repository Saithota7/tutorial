// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, expenses} = moneyDetails

  return (
    <div className="container-2">
      <div className="container-2-1 container-2-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-icon"
        />
        <div className="container-2-3">
          <p className="paragraph-2">Your Balance</p>
          <p className="paragraph-3" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>
      <div className="container-2-1 container-2-4">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-icon"
        />
        <div className="container-2-3">
          <p className="paragraph-2">Your Income</p>
          <p className="paragraph-3" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="container-2-1 container-2-5">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-icon"
        />
        <div className="container-2-3">
          <p className="paragraph-2">Your Expenses</p>
          <p className="paragraph-3" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
