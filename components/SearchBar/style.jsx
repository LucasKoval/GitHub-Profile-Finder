import styled from 'styled-components'

const SearchContainer = styled.div`
  width: 100%;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`

const Search = styled.div`
  width: 40%;
  height: 3.2rem;
  border-radius: 6px;
  border: 1px solid #8b949e;
  position: relative;
  background-color: white;
  box-shadow: 0 0 8px #8b949e;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`

const SearchButton = styled.button`
  position: absolute;
  border: 0;
  right: -1px;
  top: -1px;
  height: 3.2rem;
  width: 4rem;
  color: white;
  background-color: #2ea043;
  border-radius: 0px 6px 6px 0px;
  outline: none;
  :hover {
    background-color: #60c975;
    svg {
      transform: scale(1.2);
    }
  }
  :focus {
    outline: none;
  }
  svg {
    font-size: 1.6rem;
  }
`

const SearchInput = styled.input`
  width: 83%;
  border: none;
  font-size: 16px;
  line-height: 17px;
  color: grey;
  padding: 1rem;
  border-radius: 6px;
  :focus {
    outline: none;
  }
`

export { SearchContainer, Search, SearchInput, SearchButton }
