import styled from 'styled-components'

const PageContainer = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const ColumnContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  div button {
    color: #fff;
    background-color: #2ea043;
    border-color: #2ea043;
    :hover {
      background-color: #60c975;
      border-color: #60c975;
    }
    :focus {
      background-color: #58a6ff;
      border-color: #58a6ff;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
    max-height: 100%;
    padding: 0;
    &.lastColumnContainer {
      padding-bottom: 2rem;
    }
  }
`

const Title = styled.h3`
  margin: 1rem 0;
  line-height: 1.15;
  text-align: center;
`

const ImageContainer = styled.div`
  margin-bottom: 1rem;
  div {
    overflow: visible !important;
    img {
      border-radius: 50%;
      box-shadow: 0 0 6px #8b949e;
    }
  }
  @media (max-width: 425px) {
    margin-top: 6rem;
    margin-bottom: 2rem;
    width: 10rem;
    height: 10rem;
  }
`

const DataContainer = styled.div`
  display: flex;
  align-self: center;
  max-height: 36rem;
`

const ListContainer = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin: 0;
  li a:hover {
    color: #58a6ff;
  }
  hr {
    width: 90%;
    margin: 0.3rem 0;
    &.onlyMobile {
      display: none;
    }
  }
  &.repoData {
    margin-top: 2rem;
  }
  @media (max-width: 425px) {
    word-break: break-word;
    hr {
      margin: 0.5rem 0;
      &.onlyMobile {
        display: block;
      }
    }
  }
`

const CommitList = styled.div`
  display: flex;
  align-self: flex-start;
  flex-flow: column;
  overflow-y: scroll;
  word-wrap: break-word;
  width: -webkit-fill-available;
  padding-right: 1rem;
  li {
    word-wrap: break-word;
    p {
      margin: 0;
      word-wrap: break-word;
    }
  }
  @media (max-width: 425px) {
    overflow-y: none;
    padding-right: 0;
  }
`

export {
  PageContainer,
  ColumnContainer,
  Title,
  ImageContainer,
  DataContainer,
  ListContainer,
  CommitList,
}
