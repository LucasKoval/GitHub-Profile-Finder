import React from 'react'
import { get } from 'lodash'
import { useQuery } from '@apollo/client'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import dayjs from 'dayjs'
import { GET_REPOSITORY } from '@/api/query'
import { PageContainer, ListContainer, CommitList } from '@/components/Results/styles'

const Repo = ({ repo, owner }) => {
  // Api request - Search repository
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { name: repo, owner: owner },
  })

  if (loading) {
    return (
      <PageContainer className="loadingRepo">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} timeout={3000} />
      </PageContainer>
    )
  }
  if (error) return <></>

  const { name, description, stargazerCount, commitComments } = get(data, 'repository', {})

  const commits = get(commitComments, 'nodes', []).map((commit) => {
    return commit
  })

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
                    <strong>Commit:</strong> {index + 1}
                  </p>
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
