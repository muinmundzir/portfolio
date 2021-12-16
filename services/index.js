import { request, gql } from 'graphql-request'

const graphqlAPI =
  'https://api-ap-southeast-2.graphcms.com/v2/ckx8phlcn0s5h01z41kcc0me9/master'

export const getProfile = async () => {
  const query = gql`
    query MyQuery {
      profiles {
        name
        description
        image {
          url
        }
      }
      hubAccounts {
        githubAccount
        telegramAccount
        twitterAccount
        whatsappAccount
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result
}
