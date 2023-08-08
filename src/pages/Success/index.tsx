import { BoxAwaiting, BoxDegrade, BoxImageSuccess, BoxSuccess } from './styles'

import CoffeeDeliverySuccess from '../../assets/images/coffee-delivery-success.svg'
import { TextRegular, TextTitle } from '../../components/Typography'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { IconsContainer } from '../Home/styles'

export const Success = () => {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </TextRegular>
              <TextRegular>Farrapos - Porto Alegre, RS</TextRegular>
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
                <span>Cartão de Crédito</span>
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
