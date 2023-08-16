import styled from 'styled-components'

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
