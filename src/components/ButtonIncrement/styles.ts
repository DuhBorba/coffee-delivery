import styled from 'styled-components'

export const BoxIncrement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  margin: 0 0.5rem 0 1.5rem;
  width: 4.5rem;
  height: 2.25rem;

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.purple};
    transition: 0.3s;
    :focus {
      box-shadow: unset;
    }
    :disabled {
      opacity: 0.5;
    }
  }
`
