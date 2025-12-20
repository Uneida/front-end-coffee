import './card.css';
type CardProps = {
  imageURL: string
  title: string
  subTitle: string
  vintage: string
  roastLevel: string
}

export const Card = ({ imageURL, title, subTitle, vintage, roastLevel }: CardProps) => {
  return (
    <div className='card-body'>
      <div className='card-image' style={{ backgroundImage: `url('${imageURL}')` }}></div>
      <div>
        <h3>
          Nome: {title}
        </h3>
        <h4>
          Produtor: {subTitle}
        </h4>
        <h4>
          Safra: {vintage}
        </h4>
        <h4>
          Torra: {roastLevel}
        </h4>
      </div>
    </div>
  )
}