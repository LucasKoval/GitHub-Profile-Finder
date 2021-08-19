import React from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Error404 from '../../pages/404'
import { GET_ALL_DATA, GET_USER_INFO, GET_REPOSITORIES } from '../../services/query'
import { BodyContainer, ColumnContainer, Title } from './style'

const Results = ({ user, setUser, search }) => {
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { userName: search },
  })

  const addDefaultSrc = (event) => {
    event.target.src = '/images/default-avatar.png'
  }

  if (loading) {
    return (
      <BodyContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </BodyContainer>
    )
  }
  if (error) return <Error404 />

  const { id, login, url, avatarUrl, repositories } = data.repositoryOwner
  return (
    <>
      <ColumnContainer className="ColumnContainer">
        <div className="userAvatarContainer">
          <Image
            src={avatarUrl ? avatarUrl : '/images/default-avatar.png'}
            onError={addDefaultSrc}
            alt="Avatar"
            width="200"
            height="200"
          />
        </div>
        <div>
          <ul>
            <li>Name: {login}</li>
            <li>Company:</li>
            <li>URL: {url}</li>
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
    </>
  )
}

export default Results
