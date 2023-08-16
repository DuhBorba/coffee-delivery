import React from 'react'
import {
  BoxImageCoffee,
  BoxIncrementRemove,
  BoxRemove,
  ButtonRemove,
  CoffeeCard,
} from './style'
import { TextRegular } from '../../../../components/Typography'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'

interface CoffeeCheckoutCardProps {
  coffee: CartItem
}

export const CoffeeCheckoutCard = ({ coffee }: CoffeeCheckoutCardProps) => {
  const coffeeTotal = coffee.quantity * coffee.price

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCard>
      <BoxImageCoffee>
        <img src={`/images/${coffee.image}`} alt="" />
      </BoxImageCoffee>
      <div>
        <div>
          <TextRegular>{coffee.name}</TextRegular>
        </div>
        <BoxRemove>
          <BoxIncrementRemove>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <input type="number" value={coffee.quantity} />
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </BoxIncrementRemove>
          <ButtonRemove>
            <Trash size={16} /> Remover
          </ButtonRemove>
        </BoxRemove>
      </div>
      <TextRegular weight={700}>
        <p>R$ {formattedPrice}</p>
      </TextRegular>
    </CoffeeCard>
  )
}
