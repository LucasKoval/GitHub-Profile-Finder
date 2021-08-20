import React from 'react'
import { useQuery } from '@apollo/client'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import dayjs from 'dayjs'
import { GET_REPOSITORY } from '../../services/query'
import { PageContainer, ListContainer, CommitList } from '../Results/style'

const Repo = ({ repo, owner }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { name: repo, owner: owner },
  })

  if (loading) {
    return (
      <PageContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </PageContainer>
    )
  }
  if (error) return <></>

  const { name, description, stargazerCount, commitComments } = data.repository

  const commits = commitComments.nodes.map((commit) => {
    return commit
  })
  console.log('commits:', commits)

  return (
    <>
      <ListContainer className="repoData">
        <li>
          <strong>Name:</strong> {name || '-'}
        </li>
        <li>
          <strong>Description:</strong> {description || '-'}
        </li>
        <li>
          <strong>Stargazer Count:</strong> {stargazerCount}
        </li>
        <li>
          <strong>Commit Comments:</strong> {commitComments.totalCount}
        </li>
        <hr />

        <CommitList>
          {commits &&
            commits.map((commit, index) => (
              <>
                <li key={index + 1}>
                  <p>
                    <strong>Committed Date:</strong>{' '}
                    {dayjs(commit.commit.committedDate).format('DD/MM/YYYY') || '-'}
                  </p>
                  <p>
                    <strong>Changed Files:</strong> {commit.commit.changedFiles || '-'}
                  </p>
                  <p>
                    <strong>Message:</strong> {commit.commit.messageBody || '-'}
                  </p>
                  <p>
                    <strong>Commit Url:</strong>
                    <a href={commit.commit.commitUrl} target="_blank" rel="noreferrer">
                      {' '}
                      {'Link' || '-'}
                    </a>
                  </p>
                </li>
                <hr />
              </>
            ))}
        </CommitList>
      </ListContainer>
    </>
  )
}

export default Repo
