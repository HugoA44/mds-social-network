import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($username: String) {
    posts(filters: { user: { username: { eq: $username } } }) {
      data {
        id
        attributes {
          title
          Content
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
          likers {
            data {
              id
              attributes {
                username
              }
            }
          }
          medias {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
