import React from 'react'

import { coffees } from '../../coffees'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  BoxIncrement,
  BoxPrice,
  ButtonCart,
  Card,
  Description,
  Name,
  OurCoffeeContainer,
  Subtitle,
  TagCoffee,
} from './styles'

export const OurCoffees = () => {
  return (
    <>
      <Subtitle>Nossos cafés</Subtitle>

      <OurCoffeeContainer>
        {coffees.map((coffee) => (
          <Card key={coffee.id}>
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
                <button>
                  <Minus size={14} weight="bold" />
                </button>
                <input type="number" value={1} />
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </BoxIncrement>
              <ButtonCart>
                <ShoppingCart size={22} weight="fill" />
              </ButtonCart>
            </BoxPrice>
          </Card>
        ))}
      </OurCoffeeContainer>
    </>
  )
}
