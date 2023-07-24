import styled from 'styled-components'

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.text['title-l']};
  color: ${(props) => props.theme.colors['base-title']};
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 3.38rem;
`

export const OurCoffeeContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;
`
export const Card = styled.div`
  background: #f3f2f2;
  width: 16rem;
  border-radius: 6px 36px;
  text-align: center;
  padding: 0 1.25rem 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: -1.25rem 0 0.75rem;
  }
`

export const TagCoffee = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.text['components-tag']};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['yellow-dark']};
  background: ${(props) => props.theme.colors['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const Name = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.text['regular-l']};
  color: ${(props) => props.theme.colors['base-subtitle']};
  margin: 1rem 0 0.5rem;
`

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.text['regular-s']};
  color: ${(props) => props.theme.colors['base-label']};
  margin-bottom: 2rem;
`
export const BoxPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${(props) => props.theme.text['title-m']};
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 800;
    span {
      font-family: ${(props) => props.theme.fonts.regular};
      font-size: ${(props) => props.theme.text['regular-s']};
      font-weight: 400;
      margin-right: 0.125rem;
    }
  }
`

export const BoxIncrement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  margin: 0 0.5rem 0 1.5rem;
  max-width: 75px;
  height: 2.25rem;

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
export const ButtonCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors['purple-dark']};
  border: none;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 6px;

  svg {
    color: #fff;
  }
`
