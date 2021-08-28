import styled from 'styled-components'

const BodyContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d8d9d3;
  background-color: #0d1117;
  @media (max-width: 425px) {
    min-height: 100vh;
    height: -webkit-fill-available;
  }
`

const MainSection = styled.main`
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
  justify-content: space-around;
  align-items: center;
  @media (max-width: 425px) {
    width: 90%;
    height: -webkit-fill-available;
    flex-flow: column;
    justify-content: center;
  }
`

const ErrorContainer = styled.div`
  img {
    border-radius: 75px;
  }
  @media (max-width: 425px) {
    margin-top: 5rem;
    img {
      width: '300px';
      height: '169px';
    }
  }
`

const NotFound = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

export { BodyContainer, MainSection, PageContainer, ErrorContainer, NotFound }
