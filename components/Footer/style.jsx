import styled from 'styled-components'

const FooterSection = styled.footer`
  width: 100%;
  height: 100px;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b949e;
  background-color: #161b22;
  @media (max-width: 425px) {
    height: 9.5rem;
  }
`

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    flex-flow: column;
    height: 9.5rem;
  }
`

const SubContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    margin: 0.4rem 0;
  }
`

const Title = styled.h4`
  margin: 0;
`

const Credits = styled.p`
  font-size: 17px;
  margin: 0;
  color: #58a6ff;
`

export { FooterSection, Container, SubContainer, Title, Credits }
