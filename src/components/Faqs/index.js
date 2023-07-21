import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList.map(each => ({...each, isVisible: false})),
    }
  }

  showAndHideIcon = id => {
    const {faqsList} = this.state
    const updateList = faqsList.map(each => {
      if (each.id === id) {
        return {...each, isVisible: !each.isVisible}
      }
      return each
    })
    this.setState({
      faqsList: updateList,
    })
  }

  render() {
    const {faqsList} = this.state
    console.log(faqsList)
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                showAndHideIcon={this.showAndHideIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
