import * as React from 'react';
import AddUser from './AddUser';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';


const ADD_USER_QUERY = gql`
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

const AddUserGqlContainer = (props) => (
    <Query
        query={ADD_USER_QUERY}
    >
        {({ loading, error, data, refetch }) => {
            if (loading) {
                return <p>Loading...</p>
            }
            if (error) {
                return <p>Error!</p>
            }
            return <AddUser {...props} {...data} refetch={() => refetch()} />
        }}
    </Query>
);

export default AddUserGqlContainer;