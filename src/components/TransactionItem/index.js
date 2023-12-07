// Write your code here
import './index.css'

const TransactionItem = props => {
  const {
    transactionTypeOptions,
    historyDetails,
    clickDeleteButton,
    clickDeleteButton2,
  } = props
  const {id, title, amount, option} = historyDetails

  const filterObject = transactionTypeOptions.filter(
    each => each.optionId === option,
  )
  const {displayText} = filterObject[0]

  const onClickDeleteButton = () => {
    clickDeleteButton(id)
    clickDeleteButton2(option, amount)
  }

  return (
    <li className="list-container">
      <p className="para">{title}</p>
      <p className="para">{amount}</p>
      <p className="para">{displayText}</p>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onClickDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
