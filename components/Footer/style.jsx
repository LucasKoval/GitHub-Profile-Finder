import styled from 'styled-components'

const FooterSection = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #8b949e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b949e;
  background-color: #161b22;
`

const FullContainer = styled.div`
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

const Title = styled.h5`
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`

const Credits = styled.p`
  color: #58a6ff;
`

export { FooterSection, FullContainer, Title, Credits }
