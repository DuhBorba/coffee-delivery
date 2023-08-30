import React from 'react'
import { BoxIncrement } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'
import { TextRegular } from '../Typography'

interface ButtonIncrementProps {
  size: 's' | 'm'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export const ButtonIncrement = ({
  size = 'm',
  onIncrease,
  onDecrease,
  quantity,
}: ButtonIncrementProps) => {
  return (
    <BoxIncrement size={size}>
      <button type="button" onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="bold" />
      </button>
      <TextRegular>{quantity}</TextRegular>
      <button type="button" onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </button>
    </BoxIncrement>
  )
}
