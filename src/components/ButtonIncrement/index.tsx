import React from 'react'
import { BoxIncrement } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'
import { TextRegular } from '../Typography'

interface ButtonIncrementProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export const ButtonIncrement = ({
  onIncrease,
  onDecrease,
  quantity,
}: ButtonIncrementProps) => {
  return (
    <BoxIncrement>
      <button onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="bold" />
      </button>
      <TextRegular>{quantity}</TextRegular>
      <button onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </button>
    </BoxIncrement>
  )
}
