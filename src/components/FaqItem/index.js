import './index.css'

const FaqItem = props => {
  const {faqDetails, showAndHideIcon} = props
  const {id, questionText, answerText, isVisible} = faqDetails

  const onClickIcon = () => {
    showAndHideIcon(id)
  }

  const imgUrl = isVisible
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const renderAnswer = () => (
    <div>
      <hr className="line" />
      <p className="answer">{answerText}</p>
    </div>
  )

  return (
    <li className="question-answer-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={onClickIcon} className="btn">
          <img
            src={imgUrl}
            alt={isVisible ? 'minus' : 'plus'}
            className="plus-icon"
          />
        </button>
      </div>
      {isVisible && renderAnswer()}
    </li>
  )
}

export default FaqItem
