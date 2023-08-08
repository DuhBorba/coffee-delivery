import styled from 'styled-components'

export const CheckoutContainer = styled.div`
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

export const FormInputs = styled.form`
  margin-top: 2rem;
`

export const InputBox = styled.div`
  display: flex;
  flex: 1 1 0;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 540px) {
    flex-direction: column;
  }

  .street {
    width: 100%;
  }

  .complement {
    display: flex;
    align-items: center;
    flex: 2 1 0;
    p {
      margin-right: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme.colors['base-label']};
      font-size: ${(props) => props.theme.text['regular-xs']};
    }
  }

  .city {
    flex: 1.5 1 0;
  }

  .uf {
    flex: 0.4 1 0;
  }

  div {
    background: ${(props) => props.theme.colors['base-input']};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors['base-button']};
  }

  input {
    font-size: ${(props) => props.theme.text['regular-s']};
    color: ${(props) => props.theme.colors['base-label']};
    background: transparent;
    border: none;
    height: 2.625rem;
    width: 100%;
    padding: 0 0.75rem;
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

export const CoffeeCard = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const BoxRemove = styled.div`
  display: flex;
  margin-top: 0.5rem;

  @media (max-width: 460px) {
    margin: 0.5rem 0;
  }
`

export const BoxImageCoffee = styled.div`
  img {
    height: 4rem;
    width: 4rem;
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 0.5rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: 0.3s;

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.text['regular-xs']};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) => props.theme.colors['base-button']};

  svg {
    margin-right: 0.25rem;
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  &:active {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
`

export const BoxIncrementRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  margin-right: 0.5rem;
  max-width: 75px;
  height: 2rem;

  input {
    width: 100%;
    border: 0;
    background: none;
    text-align: center;
    &:focus {
      box-shadow: unset;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.purple};
    &:focus {
      box-shadow: unset;
    }
  }
`

export const Line = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.colors['base-button']};
  margin: 1.5rem 0;
`

export const BoxTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const ButtonConfirm = styled.button`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.text['components-button-g']};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.yellow};
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.75rem 0;
  width: 100%;
  border-radius: 6px;
  border: none;
  margin-top: 0.75rem;
  transition: 0.3s;

  :hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']};
  }
`
