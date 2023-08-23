import styled from 'styled-components'

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

  :disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors['yellow-disable']};
  }
`
