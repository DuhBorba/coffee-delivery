import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export const BoxForm = styled.div`
  flex: 1 0 0;
`

export const BoxConfirm = styled.div`
  flex: 0.5 0 0;
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
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors['base-button']};
  }

  input {
    font-size: ${(props) => props.theme.text['regular-s']};
    color: ${(props) => props.theme.colors['base-label']};
    background: transparent;
    border: none;
    height: 100%;
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

export const CardConfirm = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
`
