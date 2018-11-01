// Three total Pending
// - Two regular, one contract
// Three Total Contract
// - Two regulars, one pending, one revoked
// Three total revoked
// - one contract, two regular

export const mockUsers = [
  {
    id: 801,
    firstName: 'Benny',
    lastName: 'Herta',
    email: 'Benny.Herta@fakeemail.com',
    picture: null,
    phone: '950-582-2653',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 300,
        role: [502, 506],
      },
      {
        id: 303,
        role: [504, 506, 502],
      },
      {
        id: 304,
        role: [501, 506, 502],
      },
    ],
  },
  {
    id: 802,
    firstName: null,
    lastName: null,
    email: 'phyllis.nader@fakeemail.com',
    picture: null,
    phone: null,
    active: false,
    revoke: false,
    contract: true,
    projectInstance: [
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 305,
        role: [507],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
    ],
  },
  {
    id: 803,
    firstName: 'Kris',
    lastName: 'Gerhold',
    email: 'Kris.Gerhold@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=90146',
    phone: '358-976-1394',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 305,
        role: [507],
      },
      {
        id: 306,
        role: [502, 506],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 302,
        role: [502, 505],
      },
    ],
  },
  {
    id: 804,
    firstName: 'Dillon',
    lastName: 'Towne',
    email: 'Dillon.Towne@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=21955',
    phone: '885-388-3780',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 305,
        role: [507],
      },
    ],
  },
  {
    id: 805,
    firstName: 'Reese',
    lastName: 'McGlynn',
    email: 'Reese.McGlynn@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=6904',
    phone: '374-426-0850',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 305,
        role: [507],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
    ],
  },
  {
    id: 806,
    firstName: null,
    lastName: null,
    email: 'Alanis.Fisher@fakeemail.com',
    picture: null,
    phone: null,
    active: false,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 305,
        role: [507],
      },
    ],
  },
  {
    id: 807,
    firstName: 'Marilou',
    lastName: 'Stiedemann',
    email: 'Mollie60@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=63422',
    phone: '787-529-7255',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 306,
        role: [502, 506],
      },
    ],
  },
  {
    id: 808,
    firstName: 'Terrell',
    lastName: 'Greenfelder',
    email: 'Terrell.Greenfelder@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=43972',
    phone: '982-874-5403',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
    ],
  },
  {
    id: 809,
    firstName: 'Jessie',
    lastName: 'Fatima',
    email: 'Jessie.Fatima@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=90411',
    phone: '310-506-9119',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 305,
        role: [507],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 306,
        role: [502, 506],
      },
    ],
  },
  {
    id: 810,
    firstName: 'Autumn',
    lastName: 'Watsica',
    email: 'Autumn.Watsica@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=64102',
    phone: '432-666-5572',
    active: true,
    revoke: false,
    contract: true,
    projectInstance: [
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 306,
        role: [502, 506],
      },
      {
        id: 300,
        role: [503, 506],
      },
    ],
  },
  {
    id: 811,
    firstName: 'Jayde',
    lastName: 'Witting',
    email: 'Jayde.Witting@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=299',
    phone: '892-629-2141',
    active: true,
    revoke: true,
    contract: false,
    projectInstance: [
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 306,
        role: [502, 506],
      },
    ],
  },
  {
    id: 812,
    firstName: 'Steven',
    lastName: 'Rowe',
    email: 'Steven.Rowe@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=25786',
    phone: '591-112-6303',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 305,
        role: [507],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 306,
        role: [502, 506],
      },
    ],
  },
  {
    id: 813,
    firstName: 'Tamara',
    lastName: 'Allen',
    email: 'Tamara.Allen@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=93823',
    phone: '440-232-1940',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 306,
        role: [502, 506],
      },
    ],
  },
  {
    id: 814,
    firstName: null,
    lastName: null,
    email: 'Dale.Howell@fakeemail.com',
    picture: null,
    phone: null,
    active: false,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 306,
        role: [502, 506],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
    ],
  },
  {
    id: 815,
    firstName: 'Terry',
    lastName: 'House',
    email: 'Terry.House@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=1629',
    phone: '550-778-6706',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 305,
        role: [507],
      },
    ],
  },
  {
    id: 816,
    firstName: 'Kylie',
    lastName: 'Woods',
    email: 'Kylie.Woods@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=2106',
    phone: '101-820-6035',
    active: true,
    revoke: false,
    contract: true,
    projectInstance: [
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 306,
        role: [502, 506],
      },
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
    ],
  },
  {
    id: 817,
    firstName: 'Bailey',
    lastName: 'Hopkins',
    email: 'Bailey.Hopkins@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=86873',
    phone: '987-565-7138',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
      {
        id: 305,
        role: [507],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 306,
        role: [502, 506],
      },
    ],
  },
  {
    id: 818,
    firstName: 'Sheldon',
    lastName: 'Bridges',
    email: 'Sheldon.Bridges@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=92913',
    phone: '259-576-3773',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 305,
        role: [507],
      },
    ],
  },
  {
    id: 819,
    firstName: 'Jacob',
    lastName: 'Zamora',
    email: 'Jacob.Zamora@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=27327',
    phone: '569-949-1644',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 301,
        role: [502, 506, 501, 504, 503, 507, 500],
      },
      {
        id: 302,
        role: [502, 505],
      },
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
    ],
  },
  {
    id: 820,
    firstName: 'Addison',
    lastName: 'Hughes',
    email: 'Addison.Hughes@fakeemail.com',
    picture: 'http://i.pravatar.cc/150?u=27781',
    phone: '812-321-0161',
    active: true,
    revoke: true,
    contract: true,
    projectInstance: [
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
    ],
  },
  {
    id: 821,
    firstName: 'Shawn',
    lastName: 'Rhodes',
    email: 'shawn@massivelines.com',
    picture: null,
    phone: '501-733-9480',
    active: true,
    revoke: false,
    contract: false,
    projectInstance: [
      {
        id: 304,
        role: [500, 503, 505, 501, 506, 504, 507, 502],
      },
      {
        id: 303,
        role: [504, 506, 503, 507, 502, 500],
      },
      {
        id: 307,
        role: [506, 502, 503, 505, 501, 507, 500],
      },
      {
        id: 305,
        role: [507],
      },
    ],
  },
]