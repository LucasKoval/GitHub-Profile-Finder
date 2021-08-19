import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BodyContainer, MainSection, PageContainer } from '../styles/styles'

export default function Error404() {
  return (
    <BodyContainer className="BodyContainer">
      <Header />
      <MainSection className="MainSection">
        <PageContainer className="PageContainer">
          <h1>Error 404!</h1>
        </PageContainer>
      </MainSection>
      <Footer />
    </BodyContainer>
  )
}
