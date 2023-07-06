import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import CoffeeDeliveryHome from '../../assets/images/coffee-delivery-home.svg'
import {
  BoxImage,
  BoxText,
  HomeContainer,
  IconsContainer,
  Topics,
} from './styles'
import { TextRegular } from '../../components/Typography'

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <BoxText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <TextRegular size="l" color="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextRegular>
          <Topics>
            <div>
              <IconsContainer variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </IconsContainer>
              <TextRegular>Compra simples e segura</TextRegular>
            </div>
            <div>
              <IconsContainer variant="gray">
                <Package size={16} weight="fill" />
              </IconsContainer>
              <TextRegular>Embalagem mantém o café intacto</TextRegular>
            </div>
            <div>
              <IconsContainer variant="yellow">
                <Timer size={16} weight="fill" />
              </IconsContainer>
              <TextRegular>Entrega rápida e rastreada</TextRegular>
            </div>
            <div>
              <IconsContainer variant="purple">
                <Coffee size={16} weight="fill" />
              </IconsContainer>
              <TextRegular>O café chega fresquinho até você</TextRegular>
            </div>
          </Topics>
        </BoxText>
        <BoxImage>
          <img src={CoffeeDeliveryHome} alt="" />
        </BoxImage>
      </HomeContainer>
    </>
  )
}
