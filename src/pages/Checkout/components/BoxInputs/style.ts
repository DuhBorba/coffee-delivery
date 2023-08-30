import styled from 'styled-components'

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
    position: relative;
    display: flex;
    flex: 2 1 0;
    width: 100%;

    input {
      padding-right: 80px;
    }

    p {
      position: absolute;
      top: 14px;
      right: 10px;

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
`
