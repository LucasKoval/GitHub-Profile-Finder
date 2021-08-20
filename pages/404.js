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
          <h2>User not found!</h2>
        </PageContainer>
      </MainSection>
      <Footer />
    </BodyContainer>
  )
}
