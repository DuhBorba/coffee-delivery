import React, { InputHTMLAttributes, forwardRef } from 'react'
import { InputWrapper } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  return (
    <InputWrapper>
      <input {...props} ref={ref} />
    </InputWrapper>
  )
})
