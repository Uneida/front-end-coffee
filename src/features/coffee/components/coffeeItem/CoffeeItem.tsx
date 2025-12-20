import { Card } from '../../../../components/card/Card';
import type { CoffeeType } from '../../types';
import './coffeeItem.css';
type CoffeeItemProps = {
  coffeeItem: CoffeeType
}

export const CoffeeItem = ({ coffeeItem }: CoffeeItemProps) => {
  return (
    <Card title={coffeeItem.name} subTitle={coffeeItem.producer} imageURL={coffeeItem.imageURL} vintage={coffeeItem.vintage} roastLevel={coffeeItem.roastLevel} />
  )
}