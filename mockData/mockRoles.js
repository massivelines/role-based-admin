export const mockRoles = [
  {
    id: 500,
    title: 'Administrator',
    description:
      'Administrator has access to everything.',
    resource: [
      {
        id: 600,
        rule: [
          {
            id: 202,
          },
        ],
      },
      {
        id: 608,
        rule: [
          {
            id: 200,
          },
          {
            id: 202,
          },
          {
            id: 201,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 601,
        rule: [
          {
            id: 203,
          },
          {
            id: 200,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 605,
        rule: [
          {
            id: 202,
          },
        ],
      },
    ],
  },
  {
    id: 501,
    title: 'User Administrator',
    description: 'Access users, create users, and assign projects',
    resource: [
      {
        id: 609,
        rule: [
          {
            id: 201,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 603,
        rule: [
          {
            id: 201,
          },
          {
            id: 203,
          },
          {
            id: 202,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 602,
        rule: [
          {
            id: 201,
          },
          {
            id: 202,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 606,
        rule: [
          {
            id: 203,
          },
        ],
      },
      {
        id: 604,
        rule: [
          {
            id: 201,
          },
        ],
      },
    ],
  },
  {
    id: 502,
    title: 'Project Administrator',
    description: 'Assign projects',
    resource: [
      {
        id: 610,
        rule: [
          {
            id: 201,
          },
        ],
      },
      {
        id: 607,
        rule: [
          {
            id: 200,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 602,
        rule: [
          {
            id: 201,
          },
        ],
      },
      {
        id: 608,
        rule: [
          {
            id: 200,
          },
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 610,
        rule: [
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 200,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 607,
        rule: [
          {
            id: 201,
          },
          {
            id: 202,
          },
          {
            id: 200,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 604,
        rule: [
          {
            id: 201,
          },
          {
            id: 202,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 600,
        rule: [
          {
            id: 202,
          },
          {
            id: 201,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 605,
        rule: [
          {
            id: 202,
          },
          {
            id: 201,
          },
          {
            id: 200,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 603,
        rule: [
          {
            id: 200,
          },
          {
            id: 201,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 609,
        rule: [
          {
            id: 202,
          },
        ],
      },
    ],
  },
  {
    id: 503,
    title: 'Tag Administrator',
    description: 'Add and delete available tags',
    resource: [
      {
        id: 606,
        rule: [
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 601,
        rule: [
          {
            id: 201,
          },
        ],
      },
      {
        id: 608,
        rule: [
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 200,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 607,
        rule: [
          {
            id: 200,
          },
        ],
      },
      {
        id: 603,
        rule: [
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 600,
        rule: [
          {
            id: 201,
          },
          {
            id: 200,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 606,
        rule: [
          {
            id: 203,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 605,
        rule: [
          {
            id: 200,
          },
        ],
      },
      {
        id: 610,
        rule: [
          {
            id: 203,
          },
        ],
      },
      {
        id: 601,
        rule: [
          {
            id: 202,
          },
          {
            id: 201,
          },
          {
            id: 200,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 602,
        rule: [
          {
            id: 203,
          },
          {
            id: 202,
          },
        ],
      },
    ],
  },
  {
    id: 504,
    title: 'Keyword Administrator',
    description: 'Add and delete available keywords',
    resource: [
      {
        id: 609,
        rule: [
          {
            id: 203,
          },
          {
            id: 202,
          },
          {
            id: 201,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 604,
        rule: [
          {
            id: 201,
          },
        ],
      },
      {
        id: 602,
        rule: [
          {
            id: 200,
          },
        ],
      },
      {
        id: 607,
        rule: [
          {
            id: 200,
          },
          {
            id: 201,
          },
          {
            id: 203,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 605,
        rule: [
          {
            id: 202,
          },
          {
            id: 200,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 608,
        rule: [
          {
            id: 203,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 610,
        rule: [
          {
            id: 201,
          },
          {
            id: 200,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 604,
        rule: [
          {
            id: 200,
          },
        ],
      },
      {
        id: 600,
        rule: [
          {
            id: 203,
          },
        ],
      },
      {
        id: 603,
        rule: [
          {
            id: 203,
          },
          {
            id: 200,
          },
        ],
      },
    ],
  },
  {
    id: 505,
    title: 'Reviewer',
    description: "View and tag documents",
    resource: [
      {
        id: 606,
        title: 'Roles',
        rule: [
          {
            id: 201,
          },
          {
            id: 203,
          },
          {
            id: 200,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 609,
        title: 'Markups',
        rule: [
          {
            id: 201,
          },
          {
            id: 203,
          },
          {
            id: 202,
          },
        ],
      },
      {
        id: 601,
        title: 'Comments',
        rule: [
          {
            id: 201,
          },
          {
            id: 202,
          },
          {
            id: 200,
          },
          {
            id: 203,
          },
        ],
      },
    ],
  },
  {
    id: 506,
    title: 'Manager',
    description: 'Assign users to projects and roles',
    resource: [
      {
        id: 606,
        rule: [
          {
            id: 203,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 600,
        rule: [
          {
            id: 203,
          },
          {
            id: 200,
          },
          {
            id: 202,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 607,
        rule: [
          {
            id: 201,
          },
        ],
      },
      {
        id: 608,
        rule: [
          {
            id: 203,
          },
        ],
      },
      {
        id: 603,
        rule: [
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 602,
        rule: [
          {
            id: 200,
          },
          {
            id: 203,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 604,
        rule: [
          {
            id: 201,
          },
          {
            id: 203,
          },
          {
            id: 202,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 601,
        rule: [
          {
            id: 201,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 609,
        rule: [
          {
            id: 202,
          },
          {
            id: 201,
          },
        ],
      },
    ],
  },
  {
    id: 507,
    title: 'Auditor',
    description:
      'Audit work that has been compleated',
    resource: [
      {
        id: 605,
        rule: [
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 200,
          },
        ],
      },
      {
        id: 610,
        rule: [
          {
            id: 200,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 604,
        rule: [
          {
            id: 200,
          },
          {
            id: 202,
          },
          {
            id: 203,
          },
          {
            id: 201,
          },
        ],
      },
      {
        id: 606,
        rule: [
          {
            id: 201,
          },
          {
            id: 203,
          },
        ],
      },
      {
        id: 600,
        rule: [
          {
            id: 203,
          },
          {
            id: 202,
          },
        ],
      },
    ],
  },
];
