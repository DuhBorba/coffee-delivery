import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { ContentContainer, ButtonPaymentContainer } from './styles'

type ButtonPaymentProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const ButtonPayment = forwardRef<HTMLInputElement, ButtonPaymentProps>(
  function ButtonPayment({ id, icon, label, ...props }, ref) {
    return (
      <ButtonPaymentContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </ButtonPaymentContainer>
    )
  },
)
