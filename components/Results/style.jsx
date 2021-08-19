import styled from 'styled-components'

const BodyContainer = styled.header`
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8b949e;
  background-color: #0d1117;
`

const ColumnContainer = styled.div`
  width: 40%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div.userAvatarContainer img {
    border-radius: 50%;
    box-shadow: 0 0 5px #8b949e;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

const Title = styled.h3`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

export { BodyContainer, ColumnContainer, Title }
