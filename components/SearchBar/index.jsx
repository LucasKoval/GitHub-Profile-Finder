import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { SearchContainer, Search, SearchInput, SearchButton } from './style'

const SearchBar = ({ setUser, search, setSearch }) => {
  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const handleKey = (event) => {
    if (event.key === 'Enter' && search.length > 0) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (search.length > 0) {
      setSearch(search)
      setUser(true)
    }
  }

  return (
    <SearchContainer className="searchContainer">
      <Search className="searchBar">
        <SearchInput
          className="searchInput"
          placeholder="Find a profile..."
          onInput={handleInput}
          onKeyDown={handleKey}
        />

        <SearchButton className="searchButton" onClick={() => handleSearch()}>
          <BsSearch />
        </SearchButton>
      </Search>
    </SearchContainer>
  )
}

export default SearchBar
