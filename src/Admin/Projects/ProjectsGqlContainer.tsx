import * as React from 'react';
import Projects from './Projects';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';


const CASE_LIST_QUERY = gql`
{
    projectList {
      id
      title
      active
      alias
      description
    }
  }
`;

const projectsGqlContainer = (props) => (
    <Query
        query={CASE_LIST_QUERY }
    >
        {({ loading, error, data, refetch }) => {
            if (loading) {
                return <p>Loading...</p>
            }
            if (error) {
                return <p>Error!</p>
            }
            return <Projects {...props} {...data} refetch={() => refetch()} />
        }}
    </Query>
);

export default projectsGqlContainer;