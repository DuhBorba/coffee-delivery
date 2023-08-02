import React from 'react'

import { coffees } from '../../../../coffees'
import { OurCoffeeContainer } from './styles'
import { TextTitle } from '../../../../components/Typography'
import { Card } from '../Card'

export const OurCoffees = () => {
  return (
    <>
      <TextTitle size="l">Nossos cafés</TextTitle>

      <OurCoffeeContainer>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </OurCoffeeContainer>
    </>
  )
}
