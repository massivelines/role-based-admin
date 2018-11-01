import * as React from 'react';
import Editproject from './Editproject';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';

const EDIT_CASE_QUERY = gql`
  query projectInstance($id: Int) {
    projectInstance(id: $id) {
      id
      title
      active
      alias
      description
      user {
        id
        firstName
        lastName
        email
        picture
        active
        contract
        revoke
      }
    }
  }
`;

const EditprojectGqlContainer = props => {
  console.log(props)
  return (
    <Query query={EDIT_CASE_QUERY} variables={{ id: props.projectID }}>
      {({ loading, error, data, refetch }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          // console.log(error);
          return <p>Error!</p>;
        }
        // console.log(data);
        return <Editproject {...props} {...data} refetch={() => refetch()} />;
      }}
    </Query>
  );
};

export default EditprojectGqlContainer;
