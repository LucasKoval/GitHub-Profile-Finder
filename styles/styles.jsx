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
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

const PageContainer = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

const ColumnContainer = styled.div`
  width: 40%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

const Title = styled.h3`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

export { BodyContainer, MainSection, PageContainer, ColumnContainer, Title }
