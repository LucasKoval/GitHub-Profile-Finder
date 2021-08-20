import styled from 'styled-components'

const HeaderSection = styled.header`
  width: 100%;
  height: 6.5rem;
  position: relative;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #58a6ff;
  background-color: #161b22;
  @media (max-width: 425px) {
    height: 4.5rem;
    position: fixed;
    top: 0;
    z-index: 100;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  @media (max-width: 425px) {
    font-size: 1.3rem;
  }
`

const ImageContainer = styled.div`
  &.searchIcon {
    width: 4rem;
    margin-left: 2rem;
    :hover {
      transform: scale(1.2);
    }
    @media (max-width: 425px) {
      width: 2.5rem;
      margin-left: 1.2rem;
      :hover {
        transform: none;
      }
    }
  }
  &.myAvatar {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    div {
      overflow: visible !important;
      img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        :hover {
          box-shadow: 0 0 10px #58a6ff;
        }
      }
    }
    @media (max-width: 425px) {
      width: 3rem;
      height: 3rem;
      margin-right: 1.2rem;
      div {
        overflow: visible !important;
        img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          :hover {
            box-shadow: none;
          }
        }
      }
    }
  }
`

export { HeaderSection, Title, ImageContainer }
