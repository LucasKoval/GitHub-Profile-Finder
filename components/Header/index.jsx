import React from 'react'
import Image from 'next/image'
import { HeaderSection, Title, ImageContainer } from './style'

const Header = ({ user, setUser, setSearch }) => {
  const handleSearch = () => {
    setUser(false)
  }

  const handleProfile = () => {
    setSearch('LucasKoval')
    setUser(true)
  }

  return (
    <HeaderSection>
      <ImageContainer className="searchIcon" onClick={() => handleSearch()}>
        <Image
          src="/images/search.webp"
          alt="SearchIcon"
          width="50"
          height="50"
          className="searchIcon"
        />
      </ImageContainer>
      <Title>Take Home Test</Title>
      <ImageContainer className="myAvatar" onClick={() => handleProfile()}>
        <Image
          src="/images/myProfile.jpg"
          alt="SearchIcon"
          width="64"
          height="64"
          className="myAvatar"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header
