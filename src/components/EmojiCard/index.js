import './index.css'

const EmojiCard = props => {
  const {cardDetails, clickCard} = props
  const {id, emojiName, emojiUrl} = cardDetails

  function onClickCard() {
    clickCard(id)
  }

  return (
    <li className="emoji">
      <button className="emoji-button" type="button" onClick={onClickCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
