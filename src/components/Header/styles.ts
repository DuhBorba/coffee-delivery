import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 69rem;
  padding: 0 1rem;
  margin: 2rem auto;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const HeaderButtonsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.text['regular-s']};

  background: ${(props) => props.theme.colors[`${props.variant}-light`]};

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors[`${props.variant}`]};
  }

  svg {
    color: ${(props) => props.theme.colors[props.variant]};
  }
`

export const NumberCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: -9px;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors['yellow-dark']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.text['regular-s']};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`
