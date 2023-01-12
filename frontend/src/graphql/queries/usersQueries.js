import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($username: String) {
    users: usersPermissionsUsers(filters: { username: { eqi: $username } }) {
      data {
        id
        attributes {
          username
          email
          posts {
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
      }
    }
  }
`;
