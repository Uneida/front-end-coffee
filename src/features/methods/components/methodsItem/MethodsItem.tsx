import { useNavigate } from "react-router";
import { Card } from "../../../../components/card/Card";
import type { MethodsType } from "../../types";
import "./methodsItem.css";
type MethodsItemProps = {
  methodsItem: MethodsType;
};

export const MethodsItem = ({ methodsItem }: MethodsItemProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/methods/${methodsItem.id}`);
  };
  return (
    <Card
      onClick={handleClick}
      title={`Nome: ${methodsItem.methodType}`}
      subTitle={`Tempo de extração: ${methodsItem.extractionTime}`}
      imageURL={methodsItem.imageURL}
      description={`Quantidade de café: ${methodsItem.coffeeAmount}`}
      additionalInfo={`Quantidade de água: ${methodsItem.waterAmount}`}
    />
  );
};
