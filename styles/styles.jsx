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

const MainSection = styled.div`
  width: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  @media (max-width: 425px) {
    overflow: scroll;
  }
`

const PageContainer = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px) {
    width: 90%;
    flex-flow: column;
    justify-content: center;
  }
`

export { BodyContainer, MainSection, PageContainer }
