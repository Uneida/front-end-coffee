import './card.css';
type CardProps = {
  imageURL: string
  title: string
  subTitle: string
}

export const Card = ({ imageURL, title, subTitle }: CardProps) => {
  return (
    <div className='card-body'>
      <div className='card-image' style={{ backgroundImage: `url('${imageURL}')` }}></div>
      <div>
        <h3>
          {title}
        </h3>
        <h4>
          {subTitle}
        </h4>
      </div>
    </div>
  )
}