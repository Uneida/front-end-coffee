import { useNavigate } from "react-router";
import { Card } from "../../../../components/card/Card";
import type { CoffeeType } from "../../types";
import "./coffeeItem.css";
type CoffeeItemProps = {
  coffeeItem: CoffeeType;
};

export const CoffeeItem = ({ coffeeItem }: CoffeeItemProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/coffee/${coffeeItem.id}`);
  };
  return (
    <Card
      onClick={handleClick}
      title={`Nome: ${coffeeItem.name}`}
      subTitle={`Produtor: ${coffeeItem.producer}`}
      imageURL={coffeeItem.imageURL}
      description={`Safra: ${coffeeItem.vintage}`}
      additionalInfo={`Torra: ${coffeeItem.roastLevel}`}
    />
  );
};
