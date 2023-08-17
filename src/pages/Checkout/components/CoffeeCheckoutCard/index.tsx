import React from 'react'
import { BoxImageCoffee, BoxRemove, ButtonRemove, CoffeeCard } from './style'
import { TextRegular } from '../../../../components/Typography'
import { Trash } from '@phosphor-icons/react'

import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { ButtonIncrement } from '../../../../components/ButtonIncrement'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCheckoutCardProps {
  coffee: CartItem
}

export const CoffeeCheckoutCard = ({ coffee }: CoffeeCheckoutCardProps) => {
  const coffeeTotal = coffee.quantity * coffee.price

  const formattedPrice = formatMoney(coffeeTotal)

  const { changeCartItemQuantity } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

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
          <ButtonIncrement
            size="s"
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={coffee.quantity}
          />
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
