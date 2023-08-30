import { BoxAwaiting, BoxDegrade, BoxImageSuccess, BoxSuccess } from './styles'

import CoffeeDeliverySuccess from '../../assets/images/coffee-delivery-success.svg'
import { TextRegular, TextTitle } from '../../components/Typography'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { IconsContainer } from '../Home/styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/BoxPayment'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export const Success = () => {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <BoxSuccess>
      <div>
        <TextTitle size="l" color="yellow-dark">
          Uhu! Pedido confirmado
        </TextTitle>
        <TextRegular size="l">
          Agora é só aguardar que logo o café chegará até você
        </TextRegular>
        <BoxDegrade>
          <BoxAwaiting>
            <IconsContainer variant="purple">
              <MapPin size={16} weight="fill" />
            </IconsContainer>
            <div>
              <TextRegular>
                Entrega em{' '}
                <span>
                  {state.street}, {state.number}
                </span>
              </TextRegular>
              <TextRegular>
                {state.district} - {state.city}, {state.uf}
              </TextRegular>
            </div>
          </BoxAwaiting>
          <BoxAwaiting>
            <IconsContainer variant="yellow">
              <Timer size={16} weight="fill" />
            </IconsContainer>
            <div>
              <TextRegular>Previsão de entrega</TextRegular>
              <TextRegular>
                <span>20 min - 30 min</span>
              </TextRegular>
            </div>
          </BoxAwaiting>
          <BoxAwaiting>
            <IconsContainer variant="yellow-dark">
              <CurrencyDollar size={16} />
            </IconsContainer>
            <div>
              <TextRegular>Pagamento na entrega</TextRegular>
              <TextRegular>
                <span>{paymentMethods[state.paymentMethod].label}</span>
              </TextRegular>
            </div>
          </BoxAwaiting>
        </BoxDegrade>
      </div>
      <BoxImageSuccess>
        <img src={CoffeeDeliverySuccess} alt="" />
      </BoxImageSuccess>
    </BoxSuccess>
  )
}
