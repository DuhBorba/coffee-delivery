import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

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
  }
`
