import { gql } from '@apollo/client'

const GET_ALL_DATA = gql`
  query getAllData($userName: String!) {
    repositoryOwner(login: $userName) {
      id
      login
      avatarUrl
      url
      repositories(first: 20, ownerAffiliations: OWNER) {
        totalCount
        nodes {
          id
          name
          description
          isPrivate
          stargazerCount
          commitComments(first: 20) {
            totalCount
            nodes {
              commit {
                id
                commitUrl
                messageBody
              }
              createdAt
              url
            }
          }
          issues(first: 10) {
            nodes {
              title
            }
          }
        }
      }
    }
  }
`

const GET_USER_INFO = gql`
  query getUserInfo($userName: String!) {
    repositoryOwner(login: $userName) {
      id
      login
      avatarUrl
      url
      repositories(first: 20, ownerAffiliations: OWNER) {
        totalCount
        nodes {
          id
          name
          description
          isPrivate
        }
      }
    }
  }
`

const GET_REPOSITORIES = gql`
  query getRepositories($userName: String!) {
    repositoryOwner(login: $userName) {
      repositories(first: 20, ownerAffiliations: OWNER) {
        totalCount
        nodes {
          id
          name
          description
          isPrivate
          stargazerCount
          commitComments(first: 20) {
            totalCount
            nodes {
              commit {
                id
                commitUrl
                messageBody
              }
              createdAt
              url
            }
          }
          issues(first: 10) {
            nodes {
              title
            }
          }
        }
      }
    }
  }
`

module.exports = {
  GET_ALL_DATA,
  GET_USER_INFO,
  GET_REPOSITORIES,
}
