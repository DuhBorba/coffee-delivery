import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import Logo from '../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <div>
          <img src={Logo} alt="Logo Coffee Delivery" />
        </div>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            <p>Limeira, SP</p>
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </nav>
    </HeaderContainer>
  )
}
