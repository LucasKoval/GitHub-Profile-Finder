import React from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Error404 from '../../pages/404'
import { GET_USER_INFO, GET_REPOSITORIES } from '../../services/query'
import { PageContainer, ColumnContainer, Title, ImageContainer, DataContainer } from './style'

const Results = ({ search }) => {
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { userName: search },
  })

  if (loading) {
    return (
      <PageContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </PageContainer>
    )
  }
  if (error) return <Error404 />

  const {
    id,
    name,
    login,
    avatarUrl,
    email,
    location,
    company,
    bio,
    url,
    websiteUrl,
    followers,
    following,
    contributionsCollection,
    repositories,
  } = data.user

  return (
    <>
      <ColumnContainer className="ColumnContainer">
        <ImageContainer className="userAvatarContainer">
          <Image
            src={avatarUrl}
            alt="Avatar"
            width="200"
            height="200"
            placeholder="blur"
            blurDataURL="/images/logo.png"
          />
        </ImageContainer>

        <DataContainer>
          <ul>
            <li>Name: {name || '-'}</li>
            <li>Location: {location || '-'}</li>
            <li>Company: {company || '-'}</li>
            <li>Bio: {bio || '-'}</li>
            <li>Email: {email || '-'}</li>
            <li>
              URL:
              <a href={url} target="_blank" rel="noreferrer">
                {' '}
                {url || '-'}
              </a>
            </li>
            <li>
              Website:
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                {' '}
                {websiteUrl || '-'}
              </a>
            </li>
          </ul>
        </DataContainer>
      </ColumnContainer>

      <ColumnContainer className="ColumnContainer">
        <Title>Repository</Title>

        <DataContainer>
          <ul>
            <li>Name:</li>
            <li>Description:</li>
            <li>Commits:</li>
          </ul>
        </DataContainer>
      </ColumnContainer>
    </>
  )
}

export default Results
