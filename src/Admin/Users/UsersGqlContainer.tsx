import * as React from 'react';
import Users from './Users';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';


const GET_ALL_USERS = gql`
  {
    usersList {
      id
      firstName
      lastName
      email
      picture
      phone
      active
      revoke
      contract
      projectInstance {
        id
        title
        role {
          id
          title
        }
      }
    }
  }
`;

const UsersGqlContainer = () => (
  <Query
    query={GET_ALL_USERS}
  >
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <p>Loading...</p>
      }
      if (error) {
        // console.log(error);
        return <p>Error!</p>
      }
      return <Users data={data} refetch={() => refetch()} />
    }}
  </Query>
);

export default UsersGqlContainer;

// export default graphql(GET_ALL_USERS)(Users);
