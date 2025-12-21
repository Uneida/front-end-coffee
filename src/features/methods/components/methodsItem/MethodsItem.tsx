

import { Card } from '../../../../components/card/Card';
import type { MethodsType } from '../../types';
import './methodsItem.css';
type MethodsItemProps = {
  methodsItem: MethodsType
}

export const MethodsItem = ({ methodsItem }: MethodsItemProps) => {
  return (
    <Card title={methodsItem.methodType} subTitle={methodsItem.time} imageURL={methodsItem.imageURL} />
  )
}