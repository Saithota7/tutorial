import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: 'INCOME',
    income: 0,
    expenses: 0,
    historyList: [],
  }

  clickDeleteButton = id => {
    this.setState(prevState => {
      const filteredHistoryList = prevState.historyList.filter(
        eachHistory => eachHistory.id !== id,
      )

      return {
        historyList: filteredHistoryList,
      }
    })
  }

  clickDeleteButton2 = (option, amount) => {
    const numericAmount = parseInt(amount)

    if (option === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - numericAmount,
      }))
    } else if (option === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses - numericAmount,
      }))
    }
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onAddHistory = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const newHistory = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      option: optionId,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
    }))

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amountInput),
      }))
    } else if (optionId === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amountInput),
      }))
    }
  }

  render() {
    const {
      titleInput,
      amountInput,
      income,
      expenses,
      historyList,
      optionId,
    } = this.state
    const moneyDetails = {income, expenses}
    console.log(income, expenses)
    return (
      <div className="bg-container">
        <div className="container-1">
          <h1 className="heading-1">Hi, Richard</h1>
          <p className="paragraph-1">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails moneyDetails={moneyDetails} />
        <div className="container-3">
          <div className="container-3-1">
            <h1 className="heading-2">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAddHistory}>
              <label className="label-element" htmlFor="title">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                value={titleInput}
                onChange={this.onChangeTitleInput}
                className="input-1"
                placeholder="TITLE"
              />
              <label className="label-element" htmlFor="amount">
                Amount
              </label>
              <input
                id="amount"
                type="text"
                value={amountInput}
                onChange={this.onChangeAmountInput}
                className="input-1"
                placeholder="Amount"
              />
              <label className="label-element" htmlFor="type">
                TYPE
              </label>
              <select
                id="type"
                className="input-1"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                <option value="INCOME">Income</option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="container-3-2">
            <h1 className="heading-2">History</h1>
            <div className="container-3-2-1">
              <p className="heading-3">Title</p>
              <p className="heading-3">Amount</p>
              <p className="heading-3">Type</p>
            </div>
            <ul className="history-container">
              {historyList.map(eachHistory => (
                <TransactionItem
                  key={eachHistory.id}
                  historyDetails={eachHistory}
                  transactionTypeOptions={transactionTypeOptions}
                  clickDeleteButton={this.clickDeleteButton}
                  clickDeleteButton2={this.clickDeleteButton2}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
