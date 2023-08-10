import styled from 'styled-components'

export const CardContainer = styled.div`
  background: #f3f2f2;
  width: 15rem;
  border-radius: 6px 36px;
  text-align: center;
  padding: 0 1.25rem 1.25rem;

  &:hover {
    img {
      transform: scale(1.2) rotate(20deg);
    }
  }

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: -1.25rem 0 0.75rem;
    transition: 0.3s;
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
  margin: 0 0.125rem;
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
`

export const Price = styled.p`
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
