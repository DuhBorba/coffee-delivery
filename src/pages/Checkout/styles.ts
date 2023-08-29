import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const BoxForm = styled.div`
  flex: 1 0 0;
`

export const BoxConfirm = styled.div`
  flex: 0.7 0 0;
`

interface ColorsIconProps {
  variant: 'yellow-dark' | 'purple'
}

export const SubtitleIcon = styled.div<ColorsIconProps>`
  display: flex;

  p:first-child {
    margin-bottom: 0.12;
  }

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors[props.variant]};
  }
`

export const CardForm = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-card']};
`

export const CardPayment = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-card']};
`

export const ButtonPayment = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 1rem;
  margin-right: 0.75rem;
  border-radius: 6px;
  width: 100%;
  border: 1px solid transparent;
  transition: 0.3s;
  white-space: nowrap;

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.text['regular-xs']};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) => props.theme.colors['base-button']};

  svg {
    margin-right: 0.75rem;
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  &:active {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }

  @media (max-width: 700px) {
    max-width: 12rem;
    margin-bottom: 0.75rem;

    :last-child {
      margin-bottom: unset;
    }
  }
`

export const BoxButtonPayment = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`

export const CardConfirm = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
`

export const FormInputs = styled.div`
  margin-top: 2rem;
`
