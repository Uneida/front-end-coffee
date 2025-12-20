import './pageContent.css';
import { COFFEE_MOCK } from '../mocks/coffee'
import { CoffeeItem } from './coffeeItem/CoffeeItem';

export const PageContent = () => {
  return (
    <div>
      <div>
        <h1>Safras</h1>
      </div>
      <div className='coffee-grid'>
        {COFFEE_MOCK.map(function (item) {
          return <CoffeeItem key={item.id} coffeeItem={item} />

        })}

      </div>
    </div>
  )
}