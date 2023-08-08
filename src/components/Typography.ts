import styled from 'styled-components'

interface TextTitleProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  color?: 'base-title' | 'base-subtitle' | 'base-text' | 'yellow-dark'
  weight?: string | number
}

interface TextRegularProps {
  size?: 'l' | 'm' | 's' | 'xs'
  color?: 'base-text' | 'base-subtitle' | 'base-label'
  weight?: string | number
}

export const TextTitle = styled.h2<TextTitleProps>`
  color: ${(props) => props.theme.colors[props.color ?? 'base-title']};
  font-size: ${(props) => props.theme.text[`title-${props.size ?? 'm'}`]};
  font-weight: ${(props) => props.weight ?? 800};
  font-family: ${(props) => props.theme.fonts.title};
  line-height: 1.3;
`

export const TextRegular = styled.p<TextRegularProps>`
  color: ${(props) => props.theme.colors[props.color ?? 'base-text']};
  font-size: ${(props) => props.theme.text[`regular-${props.size ?? 'm'}`]};
  font-weight: ${(props) => props.weight ?? 400};
  font-family: ${(props) => props.theme.fonts.regular};
  line-height: 1.3;

  span {
    font-weight: 700;
  }
`
