/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      owner {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      phone
      industry
      website
      logo
      address {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner {
          nextToken
        }
        phone
        industry
        website
        logo
        address {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      organization {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      firstName
      middleName
      lastName
      username
      email
      phone
      picture
      payType {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      payRate
      isClockedIn
      address {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      userConfirmed
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organization {
          nextToken
        }
        firstName
        middleName
        lastName
        username
        email
        phone
        picture
        payType {
          nextToken
        }
        payRate
        isClockedIn
        address {
          nextToken
        }
        userConfirmed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayType = /* GraphQL */ `
  query GetPayType($id: ID!) {
    getPayType(id: $id) {
      id
      name
      value
      user {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPayTypes = /* GraphQL */ `
  query ListPayTypes(
    $filter: ModelPayTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        user {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      streetOne
      streetTwo
      city
      state
      zip
      country
      googleMapId
      lat
      long
      user {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      organization {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        streetOne
        streetTwo
        city
        state
        zip
        country
        googleMapId
        lat
        long
        user {
          nextToken
        }
        organization {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganizationUser = /* GraphQL */ `
  query GetOrganizationUser($id: ID!) {
    getOrganizationUser(id: $id) {
      id
      organization {
        id
        name
        owner {
          nextToken
        }
        phone
        industry
        website
        logo
        address {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        organization {
          nextToken
        }
        firstName
        middleName
        lastName
        username
        email
        phone
        picture
        payType {
          nextToken
        }
        payRate
        isClockedIn
        address {
          nextToken
        }
        userConfirmed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizationUsers = /* GraphQL */ `
  query ListOrganizationUsers(
    $filter: ModelOrganizationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organization {
          id
          name
          phone
          industry
          website
          logo
          createdAt
          updatedAt
        }
        user {
          id
          firstName
          middleName
          lastName
          username
          email
          phone
          picture
          payRate
          isClockedIn
          userConfirmed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganizationAddress = /* GraphQL */ `
  query GetOrganizationAddress($id: ID!) {
    getOrganizationAddress(id: $id) {
      id
      organization {
        id
        name
        owner {
          nextToken
        }
        phone
        industry
        website
        logo
        address {
          nextToken
        }
        createdAt
        updatedAt
      }
      address {
        id
        streetOne
        streetTwo
        city
        state
        zip
        country
        googleMapId
        lat
        long
        user {
          nextToken
        }
        organization {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizationAddresss = /* GraphQL */ `
  query ListOrganizationAddresss(
    $filter: ModelOrganizationAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationAddresss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organization {
          id
          name
          phone
          industry
          website
          logo
          createdAt
          updatedAt
        }
        address {
          id
          streetOne
          streetTwo
          city
          state
          zip
          country
          googleMapId
          lat
          long
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserAddress = /* GraphQL */ `
  query GetUserAddress($id: ID!) {
    getUserAddress(id: $id) {
      id
      user {
        id
        organization {
          nextToken
        }
        firstName
        middleName
        lastName
        username
        email
        phone
        picture
        payType {
          nextToken
        }
        payRate
        isClockedIn
        address {
          nextToken
        }
        userConfirmed
        createdAt
        updatedAt
      }
      address {
        id
        streetOne
        streetTwo
        city
        state
        zip
        country
        googleMapId
        lat
        long
        user {
          nextToken
        }
        organization {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserAddresss = /* GraphQL */ `
  query ListUserAddresss(
    $filter: ModelUserAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          middleName
          lastName
          username
          email
          phone
          picture
          payRate
          isClockedIn
          userConfirmed
          createdAt
          updatedAt
        }
        address {
          id
          streetOne
          streetTwo
          city
          state
          zip
          country
          googleMapId
          lat
          long
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPayType = /* GraphQL */ `
  query GetUserPayType($id: ID!) {
    getUserPayType(id: $id) {
      id
      user {
        id
        organization {
          nextToken
        }
        firstName
        middleName
        lastName
        username
        email
        phone
        picture
        payType {
          nextToken
        }
        payRate
        isClockedIn
        address {
          nextToken
        }
        userConfirmed
        createdAt
        updatedAt
      }
      payType {
        id
        name
        value
        user {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserPayTypes = /* GraphQL */ `
  query ListUserPayTypes(
    $filter: ModelUserPayTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPayTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          middleName
          lastName
          username
          email
          phone
          picture
          payRate
          isClockedIn
          userConfirmed
          createdAt
          updatedAt
        }
        payType {
          id
          name
          value
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
