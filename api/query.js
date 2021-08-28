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
      repositories(last: 9) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`

const GET_REPOSITORY = gql`
  query getRepositories($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      description
      stargazerCount
      commitComments(last: 20) {
        totalCount
        nodes {
          commit {
            id
            changedFiles
            commitUrl
            committedDate
            messageBody
          }
        }
      }
    }
  }
`

module.exports = {
  GET_USER_INFO,
  GET_REPOSITORY,
}
