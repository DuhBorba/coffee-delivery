import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5.75rem 0;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${(props) => props.theme.text['title-xl']};
    color: ${(props) => props.theme.colors['base-title']};
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const BoxText = styled.div`
  /* flex-grow: 1.15;
  flex-shrink: 0;
  flex-basis: 0; */
  flex: 1.15 0 0;
`
export const BoxImage = styled.div`
  /* flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0; */
  flex: 1 0 0;
  text-align: center;
`

export const Topics = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4rem;

  div {
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 1.75rem;
  }

  svg {
    color: ${(props) => props.theme.colors.background};
  }
`

interface IconProps {
  variant: 'yellow' | 'yellow-dark' | 'gray' | 'purple'
}

const COLORS_ICON = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

export const IconsContainer = styled.span<IconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  background: ${(props) => props.theme.colors[COLORS_ICON[props.variant]]};
`
