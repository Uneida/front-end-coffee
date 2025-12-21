import "./card.css";
type CardProps = {
  imageURL: string;
  title: string;
  subTitle: string;
  description: string;
  additionalInfo: string;
  onClick?: () => void;
};

export const Card = ({
  imageURL,
  title,
  subTitle,
  description,
  additionalInfo,
  onClick,
}: CardProps) => {
  return (
    <div className="card-body" onClick={onClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url('${imageURL}')` }}
      ></div>
      <div className="card-content">
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <h4>{description}</h4>
        <h4>{additionalInfo}</h4>
      </div>
    </div>
  );
};
