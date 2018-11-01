import { makeExecutableSchema } from 'graphql-tools';
import { find, filter } from 'lodash';

import { mockProjects } from './mockProjects';
import { mockRoles } from './mockRoles';
import { mockResources } from './mockResources';
import { mockRules } from './mockRules';
import { mockUsers } from './mockUsers';
import { mockSelf } from './mockSelf';

const usersList = mockUsers;
const projectList = mockProjects;
const roleList = mockRoles;
const resourceList = mockResources;
const rulesList = mockRules;
const selfQuery = mockSelf;

const typeDefs = `

  type ProjectInstance {
    id: Int
    title: String
    description: String
    active: Boolean 
    role: [Role]
    alias: String
		user: [User]
   }

  type Role {
    id: Int
    roleType: String
    title: String
    description: String
		resource: [Resource]
    user: [User]
   }

  type Resource {
    id: Int
    title: String
    description: String
    rule: [Rule]
   }

   type Rule {
    id: Int
    title: String
    description: String
	}

  type User {
    id: Int
    firstName: String
    lastName: String
    email: String
    picture: String
    active: Boolean
    contract: Boolean
    revoke: Boolean
    projectInstance: [ProjectInstance]
    dateRegistered: String
    phone: String
    lastDateEdited: String
    lastEditedByUser: String
    lastLogin: String
  }

  # the schema allows the following query:
  type Query {
    usersList: [User]
    projectList: [ProjectInstance]
    roleList: [Role]
    resourceList: [Resource]
    rulesList: [Rule]
    selfQuery: User
		user(id: Int!): User
		projectInstance(id: Int!): ProjectInstance
		role: Role
		
  }

  # this schema allows the following mutation:
  type Mutation {
    addUser (
        id: Int,
        email: String,
    ): User
  }
`;

// Users
// get user assigned project data and role data
const getUserProjectData = data => {
  const tempProject = find(projectList, { id: data.id });
  if (data.role) {
    tempProject.role = getAssignedRoleData(data.role);
  }
  return tempProject;
};

const getAssignedRoleData = data => {
  return data.map(mData => {
    return find(roleList, { id: mData });
  });
};

// Resource
const getResourceData = data => {
  const tempResource = find(resourceList, { id: data.id });
  if (data.rule) {
    tempResource.rule = getAssignedRuleData(data.rule);
  }
  return tempResource;
};

const getAssignedRuleData = data => {
  return data.map(mData => {
    return find(rulesList, { id: mData.id });
  });
};

const getProjectUsers = (obj, args, context, info) => {
  // console.log("Client",obj);
  return usersList.filter( userData =>{
    let userHasProject = false;
    userData.projectInstance.forEach( projectData =>{
      if (projectData.id == obj.id){
        userHasProject = true;
      }
    })
    if(userHasProject){
      return userData;
    }
  })
};

const resolvers = {
  Query: {
    usersList: () => usersList,
    projectList: () => projectList,
    roleList: () => roleList,
    resourceList: () => resourceList,
    rulesList: () => rulesList,
    selfQuery: () => selfQuery,
    user: (_, { id }) => find(usersList, { id: id }),
    projectInstance: (_, { id }) => find(projectList, { id: id }),
    role: (_, { id }) => find(roleList, { id: id }),
  },

  Mutation: {
    addUser: (root, args) => {
      const newUser = {
        id: usersList.length + 1,
        email: args.email,
      };
      usersList.push(newUser);
      return newUser;
    },
  },

  User: {
    projectInstance: ({ projectInstance }) => {
      return projectInstance.map(projectData => {
        return getUserProjectData(projectData);
      });
    },
  },

  Role: {
    resource: ({ resource }) => {
      return resource.map(resourceData => {
        return getResourceData(resourceData);
      });
    },
  },

  ProjectInstance: {
    user: (obj, args, context, info) => getProjectUsers(obj, args, context, info),
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
