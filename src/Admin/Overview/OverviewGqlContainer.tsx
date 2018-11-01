import * as React from 'react';
import Overview from './Overview';

import gql from 'graphql-tag';
// import { graphql, Query } from 'react-apollo';
import { Query } from 'react-apollo';

// const OVERVIEW_QUERY = gql`
//   {
//     projectList {
//       id
//       title
//     }
//     usersList {
//       id
//       firstName
//       lastName
//       active
//       picture
//       projectInstance {
//         id
//         title
//         roles {
//           id
//           title
//         }
//       }
//     }
//     roleList {
//       id
//       title
//       roleType
//     }
//   }
// `;

const OVERVIEW_QUERY = gql`
{
  projectList  {
    id
    title
    alias
    role{
      id
      title
      user{
        id
        firstName
        lastName
        picture
        active
      }
    }
  }
}
`;

const OverviewGqlContainer = props => (
  <Query query={OVERVIEW_QUERY}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        console.log(error)
        return <p>Error!</p>;
      }
      return <Overview {...props} {...data} refetch={() => refetch()} />;
    }}
  </Query>
);

export default OverviewGqlContainer;
