// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-paragraph">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardItem
