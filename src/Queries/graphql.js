import { gql } from "apollo-boost";

const registerQuery = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

const loginQuery = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

const getUsersQuery = gql`
  {
    getUsers {
      id
      email
    }
  }
`;

const currentUserQuery = gql`
  {
    getUser {
      name
      username
      email
    }
  }
`;

const logoutQuery = gql`
  mutation Logout {
    logout
  }
`;

export {
  registerQuery,
  loginQuery,
  getUsersQuery,
  currentUserQuery,
  logoutQuery,
};
