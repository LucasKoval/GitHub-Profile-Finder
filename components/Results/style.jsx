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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 425px) {
    width: 100%;
    padding: 1rem 0;
  }
`

const Title = styled.h3`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
`

const ImageContainer = styled.div`
  margin-bottom: 1rem;
  div {
    overflow: visible !important;
    img {
      border-radius: 50%;
      box-shadow: 0 0 8px #8b949e;
    }
  }
  @media (max-width: 425px) {
    margin-top: 6rem;
    margin-bottom: 2rem;
    width: 10rem;
    height: 10rem;
  }
`

export { PageContainer, ColumnContainer, Title, ImageContainer }
