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

export const Line = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.colors['base-button']};
  margin: 1.5rem 0;
`
