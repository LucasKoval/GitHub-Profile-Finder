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
`

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

const SubContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h5`
  margin: 0;
`

const Credits = styled.p`
  margin: 0;
  color: #58a6ff;
`

export { FooterSection, Container, SubContainer, Title, Credits }
