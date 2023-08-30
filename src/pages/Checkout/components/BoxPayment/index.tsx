import React from 'react'
import { BoxButtonPayment } from './styles'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { ButtonPayment } from '../ButtonPayment'
import { useFormContext } from 'react-hook-form'
import { TextRegular } from '../../../../components/Typography'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export const BoxPayment = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <>
      <BoxButtonPayment>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <ButtonPayment
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
        {paymentMethodError && (
          <TextRegular size="s">{paymentMethodError}</TextRegular>
        )}
      </BoxButtonPayment>
    </>
  )
}
