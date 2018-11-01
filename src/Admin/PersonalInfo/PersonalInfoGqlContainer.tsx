import * as React from 'react';
import PersonalInfo from './PersonalInfo';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';
import { render } from 'react-dom';

const SELF_QUERY = gql`
  {
    user(id: 821) {
      id
      firstName
      lastName
      email
      picture
      active
      contract
      phone
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

const PersonalInfoGqlContainer = props => (
  <Query query={SELF_QUERY}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error!</p>;
      }
      return <PersonalInfo {...props} {...data} refetch={() => refetch()} />;
    }}
  </Query>
);

export default PersonalInfoGqlContainer;
