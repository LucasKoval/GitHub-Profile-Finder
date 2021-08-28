import React, { useState } from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'
import { BodyContainer, MainSection, PageContainer } from '../styles/mainStyles'

export default function Home() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(false)

  return (
    <BodyContainer className="BodyContainer">
      <Header setUser={setUser} setSearch={setSearch} />
      <MainSection className="MainSection">
        <PageContainer className="PageContainer">
          {user ? (
            <Results search={search} />
          ) : (
            <SearchBar setUser={setUser} search={search} setSearch={setSearch} />
          )}
        </PageContainer>
      </MainSection>
      <Footer />
    </BodyContainer>
  )
}
