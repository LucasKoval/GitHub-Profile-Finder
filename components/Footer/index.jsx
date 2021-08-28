import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FooterSection, Container, SubContainer, Title, Credits } from './styles'

const Footer = () => {
  return (
    <FooterSection className="FooterSection">
      <Container className="footerContainer">
        <SubContainer className="project">
          <Title>Take Home Test 2021</Title>
        </SubContainer>

        <SubContainer className="developer">
          <Credits>Lucas Koval | Full Stack Developer</Credits>
        </SubContainer>

        <SubContainer className="contact">
          <Link href="https://lucaskovaldev.com/">
            <a target="_blank" rel="noreferrer" title="Portfolio" className="me-4">
              <Image src="/icons/pf.svg" alt="Portfolio" width="40px" height="40" />
            </a>
          </Link>

          <Link href="mailto:lucaskovaldev@gmail.com">
            <a target="_blank" rel="noreferrer" title="Email">
              <Image src="/icons/email.png" alt="Email" width="37px" height="36px" />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/lucaskoval/">
            <a target="_blank" rel="noreferrer" className="ms-4 me-4" title="LinkedIn">
              <Image src="/icons/li.svg" alt="LinkedIn" width="35px" height="35" />
            </a>
          </Link>

          <Link href="https://github.com/LucasKoval">
            <a target="_blank" rel="noreferrer" title="GitHub">
              <Image
                src="/icons/gh.png"
                alt="GitHub"
                width="36px"
                height="36px"
                className="bg-white rounded-3"
              />
            </a>
          </Link>
        </SubContainer>
      </Container>
    </FooterSection>
  )
}

export default Footer
