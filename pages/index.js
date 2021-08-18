import React from 'react'
import Image from 'next/image'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BodyContainer, MainSection, PageContainer, ColumnContainer, Title } from '../styles/styles'
import { GET_ALL_DATA, GET_USER_INFO, GET_REPOSITORIES } from '../services/query'

export default function Home() {
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { userName: 'LucasKoval' },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>Not found</p>

  /* if (repositoryOwner) {
    const { id, login, url, avatarUrl, repositories } = data.repositoryOwner
  } */

  return (
    <BodyContainer className="BodyContainer">
      <Header />
      <MainSection className="MainSection">
        <PageContainer className="PageContainer">
          <ColumnContainer className="ColumnContainer">
            <div>
              <Image src="/images/user.png" alt="Image" width="200" height="200" />
            </div>
            <div>
              <ul>
                <li>Name:</li>
                <li>Company:</li>
                <li>Description:</li>
              </ul>
            </div>
          </ColumnContainer>

          <ColumnContainer className="ColumnContainer">
            <Title>Repository</Title>
            <div>
              <ul>
                <li>Name:</li>
                <li>Description:</li>
                <li>Commits:</li>
              </ul>
            </div>
          </ColumnContainer>
        </PageContainer>
      </MainSection>
      <Footer />
    </BodyContainer>
  )
}
