import styled from 'styled-components'

const HeaderSection = styled.header`
  width: 100%;
  height: 100px;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #58a6ff;
  background-color: #161b22;
`

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
`

const ImageContainer = styled.div`
  &.searchIcon {
    width: 4rem;
    margin-left: 2rem;
    :hover {
      transform: scale(1.1);
    }
  }
  &.myAvatar {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      :hover {
        box-shadow: 0 0 5px #58a6ff;
      }
    }
  }
`

export { HeaderSection, Title, ImageContainer }
