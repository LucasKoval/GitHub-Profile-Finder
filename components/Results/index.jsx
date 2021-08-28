import React, { useState } from 'react'
import Image from 'next/image'
import { get } from 'lodash'
import { useQuery } from '@apollo/client'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Repo from '@/components/Repo'
import Error404 from '@/pages/404'
import { GET_USER_INFO } from '@/api/query'
import {
  PageContainer,
  ColumnContainer,
  Title,
  ImageContainer,
  DataContainer,
  ListContainer,
} from './styles'

const Results = ({ search }) => {
  const [repository, setRepository] = useState(false)

  // Api request - Search user
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { userName: search },
  })

  if (loading) {
    return (
      <PageContainer className="loadingUser">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </PageContainer>
    )
  }
  if (error) return <Error404 />

  const {
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
  } = get(data, 'user', {})

  const repos = get(repositories, 'nodes', []).map((repo) => {
    return repo
  })

  const handleSelect = (repo) => {
    setRepository(repo)
  }

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
          <ListContainer>
            <li>
              <strong>Username:</strong> {login || '-'}
            </li>
            <li>
              <strong>Name:</strong> {name || '-'}
            </li>
            <li>
              <strong>Location:</strong> {location || '-'}
            </li>
            <li>
              <strong>Company:</strong> {company || '-'}
            </li>
            <li>
              <strong>Bio:</strong> {bio || '-'}
            </li>
            <li>
              <strong>Followers:</strong> {followers.totalCount}
            </li>
            <li>
              <strong>Following:</strong> {following.totalCount}
            </li>
            <hr />
            <li>
              <strong>Email:</strong>
              <a href={`mailto:${url}`} target="_blank" rel="noreferrer">
                {' '}
                {email || '-'}
              </a>
            </li>
            <li>
              <strong>URL:</strong>
              <a href={url} target="_blank" rel="noreferrer">
                {' '}
                {url || '-'}
              </a>
            </li>
            <li>
              <strong>Website:</strong>
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                {' '}
                {websiteUrl || '-'}
              </a>
            </li>
            <hr />
            <li>
              <strong>Repositories Contributions:</strong>{' '}
              {contributionsCollection.totalRepositoryContributions}
            </li>
            <li>
              <strong>Pull Request Contributions:</strong>{' '}
              {contributionsCollection.totalPullRequestContributions}
            </li>
            <li>
              <strong>Commit Contributions:</strong>{' '}
              {contributionsCollection.totalCommitContributions}
            </li>
            <hr className="onlyMobile" />
          </ListContainer>
        </DataContainer>
      </ColumnContainer>

      <ColumnContainer className="lastColumnContainer">
        <Title>
          Public Repositories: <strong>{repositories.totalCount}</strong>
        </Title>

        {repos.length > 0 && (
          <>
            <DropdownButton id="dropdown-basic-button" title="Repository">
              {repos &&
                repos.map((repo, index) => (
                  <Dropdown.Item
                    href={`#/action-${index + 1}`}
                    key={index + 1}
                    onClick={() => handleSelect(repo.name)}
                  >
                    {repo.name}
                  </Dropdown.Item>
                ))}
            </DropdownButton>

            <DataContainer>
              <Repo repo={repository} owner={login} />
            </DataContainer>
          </>
        )}
      </ColumnContainer>
    </>
  )
}

export default Results
