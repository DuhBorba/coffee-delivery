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

export const CardConfirm = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
`

export const FormInputs = styled.div`
  margin-top: 2rem;
`
