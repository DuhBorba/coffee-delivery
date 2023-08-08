import styled from 'styled-components'

export const BoxSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BoxDegrade = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        160deg,
        ${(props) => props.theme.colors.yellow},
        ${(props) => props.theme.colors.purple}
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;
`

export const BoxAwaiting = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  :last-child {
    margin-bottom: unset;
  }
`

export const BoxImageSuccess = styled.div`
  @media (max-width: 960px) {
    margin-top: 2rem;
  }
  img {
    width: 100%;
  }
`
