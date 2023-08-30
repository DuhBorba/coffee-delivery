import React, { InputHTMLAttributes, forwardRef } from 'react'
import { InputWrapper, RightText } from './styles'
import { TextRegular } from '../../../../components/Typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, rightText, ...props },
  ref,
) {
  return (
    <InputWrapper hasError={!!error}>
      <input {...props} ref={ref} />
      {rightText && <RightText>{rightText}</RightText>}
      {error && <TextRegular size="s">{error}</TextRegular>}
    </InputWrapper>
  )
})
