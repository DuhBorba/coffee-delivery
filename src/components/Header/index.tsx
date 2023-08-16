import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
  NumberCart,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <nav>
        <div>
          <NavLink to="/">
            <img src={Logo} alt="Logo Coffee Delivery" />
          </NavLink>
        </div>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            <p>Limeira, SP</p>
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              <ShoppingCart size={22} weight="fill" />
              <NumberCart>{cartQuantity || 0}</NumberCart>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </nav>
    </HeaderContainer>
  )
}
