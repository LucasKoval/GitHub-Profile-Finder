import React, { useState } from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'
import { BodyContainer, MainSection, PageContainer } from '../styles/styles'

export default function Home() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (loading) {
    return (
      <BodyContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </BodyContainer>
    )
  }

  return (
    <BodyContainer className="BodyContainer">
      <Header setUser={setUser} setSearch={setSearch} />
      <MainSection className="MainSection">
        <PageContainer className="PageContainer">
          {user ? (
            <Results search={search} />
          ) : (
            <SearchBar user={user} setUser={setUser} search={search} setSearch={setSearch} />
          )}
        </PageContainer>
      </MainSection>
      <Footer />
    </BodyContainer>
  )
}
