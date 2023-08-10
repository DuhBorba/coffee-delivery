import React from 'react'

import { ShoppingCart } from '@phosphor-icons/react'
import {
  BoxPrice,
  ButtonCart,
  CardContainer,
  Description,
  Name,
  Price,
  TagCoffee,
} from './styles'
import { ButtonIncrement } from '../../../../components/ButtonIncrement'
import { useCart } from '../../../../hooks/useCart'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

export interface CoffeeProps {
  coffee: Coffee
}

export const Card = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = React.useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
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
        <Price>
          <span>R$</span>
          {coffee.price}
        </Price>
        <ButtonIncrement
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <ButtonCart onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </BoxPrice>
    </CardContainer>
  )
}
