import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
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
  font-size: ${(props) => props.theme.text['text-regular-s']};

  background: ${(props) => props.theme.colors[`${props.variant}-light`]};

  svg {
    color: ${(props) => props.theme.colors[props.variant]};
  }
`
