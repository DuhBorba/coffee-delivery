import styled from 'styled-components'

export const BoxButtonPayment = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.colors['base-error']};
    width: 100%;
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
