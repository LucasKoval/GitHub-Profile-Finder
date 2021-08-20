import { gql } from '@apollo/client'

const GET_USER_INFO = gql`
  query getUserInfo($userName: String!) {
    user(login: $userName) {
      id
      name
      login
      avatarUrl
      email
      location
      company
      bio
      url
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      contributionsCollection {
        contributionYears
        totalRepositoryContributions
        totalCommitContributions
        totalPullRequestContributions
      }
      repositories(first: 15) {
        totalCount
        nodes {
          name
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
  GET_USER_INFO,
  GET_REPOSITORIES,
}
