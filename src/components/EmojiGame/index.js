import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {topScore: 0, clicksData: [], isGameProgress: true}

  startGameAgain = () => {
    this.setState({clicksData: [], isGameProgress: true})
  }

  renderResultCard = () => {
    const {emojisList} = this.props
    const {clicksData} = this.state
    const isWon = clicksData.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clicksData.length}
        startGameAgain={this.startGameAgain}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameProgress: false})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickCard = id => {
    const {emojisList} = this.props
    const {clicksData} = this.state

    const isEmojiPresent = clicksData.includes(id)
    const clicksDataLength = clicksData.length
    console.log(emojisList.length, clicksDataLength)

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clicksDataLength)
    } else if (emojisList.length - 1 === clicksDataLength) {
      this.finishGameAndSetTopScore(emojisList.length)
    } else {
      this.setState(prevState => ({
        clicksData: [...prevState.clicksData, id],
      }))
    }
  }

  renderEmojies = () => {
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <ul className="emojies-container">
        {shuffledEmojis.map(emoji => (
          <EmojiCard
            cardDetails={emoji}
            key={emoji.id}
            clickCard={this.clickCard}
          />
        ))}
      </ul>
    )
  }

  renderResultCard = () => {
    const {emojisList} = this.props
    const {clicksData} = this.state
    const isWon = clicksData.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clicksData.length}
        startGameAgain={this.startGameAgain}
      />
    )
  }

  render() {
    const {isGameProgress, clicksData, topScore} = this.state

    return (
      <div className="app-container">
        <div className="emoji-card">
          <NavBar
            score={clicksData.length}
            topScore={topScore}
            isGameProgress={isGameProgress}
          />
          {isGameProgress ? this.renderEmojies() : this.renderResultCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
