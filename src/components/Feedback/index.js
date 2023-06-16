import {Component} from 'react'
import './index.css'

class Facebook extends Component {
  state = {clickStatus: false}

  onEmojiClick = () => {
    this.setState({clickStatus: true})
  }

  renderFeedbackScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feedBackContainer">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thankyou-text">Thank You</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <h1 className="heading">
        How satisfied are you with our customer support performance
        <ul className="emoji-container">
          {emojis.map(eachemoji => (
            <li className="list-element" key={eachemoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onEmojiClick}
              >
                <img
                  src={eachemoji.imageUrl}
                  className="emoji"
                  alt={eachemoji.name}
                />
              </button>
            </li>
          ))}
        </ul>
      </h1>
    )
  }

  render() {
    const {clickStatus} = this.state

    return (
      <div className="App-container">
        <div className="content-container">
          {clickStatus
            ? this.renderFeedbackScreen()
            : this.renderThankYouScreen()}
        </div>
      </div>
    )
  }
}

export default Facebook
