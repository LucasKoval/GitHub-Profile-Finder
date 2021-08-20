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
  @media (max-width: 425px) {
    min-height: 100vh;
    height: -webkit-fill-available;
  }
`

const MainSection = styled.div`
  width: 100%;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    height: -webkit-fill-available;
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
    height: -webkit-fill-available;
    flex-flow: column;
    justify-content: center;
  }
`

export { BodyContainer, MainSection, PageContainer }
