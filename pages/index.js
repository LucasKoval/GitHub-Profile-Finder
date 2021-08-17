import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BodyContainer, MainSection, PageContainer, ColumnContainer, Title } from '../styles/styles'

export default function Home() {
  return (
    <BodyContainer className="BodyContainer">
      <Header />
      <MainSection className="MainSection">
        <PageContainer className="PageContainer">
          <ColumnContainer className="ColumnContainer">
            <div>
              <Image src="/images/user.png" alt="Image" width="200" height="200" />
            </div>
            <div>
              <ul>
                <li>Name:</li>
                <li>Company:</li>
                <li>Description:</li>
              </ul>
            </div>
          </ColumnContainer>

          <ColumnContainer className="ColumnContainer">
            <Title>Repository</Title>
            <div>
              <ul>
                <li>Name:</li>
                <li>Description:</li>
                <li>Commits:</li>
              </ul>
            </div>
          </ColumnContainer>
        </PageContainer>
      </MainSection>
      <Footer />
    </BodyContainer>
  )
}
