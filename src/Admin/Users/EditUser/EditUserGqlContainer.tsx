import * as React from 'react';
import EditUser from './EditUser';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';


const EDIT_USER_QUERY = gql`
{
    projectList {
      id
      title
    }
    roleList {
       id
       title
    }
  }
`;

const EditUserGqlContainer = (props) => (
    <Query
        query={EDIT_USER_QUERY}
    >
        {({ loading, error, data, refetch }) => {
            if (loading) {
                return <p>Loading...</p>
            }
            if (error) {
                return <p>Error!</p>
            }
            return <EditUser {...props} {...data} refetch={() => refetch()} />
        }}
    </Query>
);

export default EditUserGqlContainer;