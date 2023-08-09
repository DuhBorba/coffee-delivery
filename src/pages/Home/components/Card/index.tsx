import React from 'react'

import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  BoxIncrement,
  BoxPrice,
  ButtonCart,
  CardContainer,
  Description,
  Name,
  TagCoffee,
} from './styles'

export interface CoffeeProps {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

export interface Coffee {
  coffee: CoffeeProps
}

export const Card = ({ coffee }: Coffee) => {
  const [quantity, setQuantity] = React.useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CardContainer>
      <img src={`/images/${coffee.image}`} alt="" />
      <div>
        {coffee.tags.map((tag) => (
          <TagCoffee key={tag}>{tag}</TagCoffee>
        ))}
      </div>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <BoxPrice>
        <p>
          <span>R$</span>
          {coffee.price}
        </p>
        <BoxIncrement>
          <button onClick={handleDecrease}>
            <Minus size={14} weight="bold" />
          </button>
          <input type="number" value={quantity} readOnly />
          <button onClick={handleIncrease}>
            <Plus size={14} weight="bold" />
          </button>
        </BoxIncrement>
        <ButtonCart>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </BoxPrice>
    </CardContainer>
  )
}
