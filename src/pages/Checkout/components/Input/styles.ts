import styled, { css } from 'styled-components'

interface InputWrapperProps {
  hasError: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  width: 100%;

  p {
    color: ${(props) => props.theme.colors['base-error']};
  }

  input {
    font-size: ${(props) => props.theme.text['regular-s']};
    color: ${(props) => props.theme.colors['base-label']};
    background: transparent;
    border: none;
    height: 2.625rem;
    width: 100%;
    padding: 0 0.75rem;

    background: ${(props) => props.theme.colors['base-input']};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors['base-button']};

    ${({ theme, hasError }) =>
      hasError &&
      css`
        border-color: ${theme.colors['base-error']};
      `}
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors['base-label']};
`
