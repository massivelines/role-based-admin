import * as React from 'react';
import Roles from './Roles';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';

const ROLES_LIST_QUERY = gql`
  {
    projectList {
      id
      title
    }
    roleList {
      id
      title
      description
      resource {
        id
        title
        rule {
          id
          title
        }
      }
    }
  }
`;

const RolesGqlContainer = props => (
  <Query query={ROLES_LIST_QUERY}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        // console.log(error);

        return <p>Error!</p>;
      }
      return <Roles {...props} {...data} refetch={() => refetch()} />;
    }}
  </Query>
);

export default RolesGqlContainer;
