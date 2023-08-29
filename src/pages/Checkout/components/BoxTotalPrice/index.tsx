import React from 'react'
import { BoxTotal, ButtonConfirm } from './style'
import { TextRegular } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

const deliveryPrice = 3.5

export const BoxTotalPrice = () => {
  const { totalCheckout, cartQuantity } = useCart()

  const formattedTotal = formatMoney(totalCheckout)

  const formattedDelivery = formatMoney(deliveryPrice)

  const formattedTotalDelivery = formatMoney(totalCheckout + deliveryPrice)
  return (
    <>
      <BoxTotal>
        <div>
          <TextRegular size="s">Total de itens</TextRegular>
        </div>
        <div>
          <TextRegular>R$ {formattedTotal}</TextRegular>
        </div>
      </BoxTotal>
      <BoxTotal>
        <div>
          <TextRegular size="s">Entrega</TextRegular>
        </div>
        <div>
          <TextRegular>R$ {formattedDelivery}</TextRegular>
        </div>
      </BoxTotal>
      <BoxTotal>
        <div>
          <TextRegular size="l" weight={700}>
            Total
          </TextRegular>
        </div>
        <div>
          <TextRegular size="l" weight={700}>
            R$ {formattedTotalDelivery}
          </TextRegular>
        </div>
      </BoxTotal>
      <ButtonConfirm disabled={cartQuantity <= 0} type="submit">
        Confirmar Pedido
      </ButtonConfirm>
    </>
  )
}
