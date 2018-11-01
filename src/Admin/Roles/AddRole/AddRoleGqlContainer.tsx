import * as React from 'react';
import AddRole from './AddRole';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';

const ROLES_LIST_QUERY = gql`
  {
    resourceList {
      id
      title
    }
    rulesList {
      id
      title
      description
    }
  }
`;

const AddRolesGqlContainer = props => (
  <Query query={ROLES_LIST_QUERY}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error!</p>;
      }
      return <AddRole {...props} {...data} refetch={() => refetch()} />;
    }}
  </Query>
);

export default AddRolesGqlContainer;
