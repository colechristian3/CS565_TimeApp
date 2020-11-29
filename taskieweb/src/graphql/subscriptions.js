/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePayType = /* GraphQL */ `
  subscription OnCreatePayType {
    onCreatePayType {
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
export const onUpdatePayType = /* GraphQL */ `
  subscription OnUpdatePayType {
    onUpdatePayType {
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
export const onDeletePayType = /* GraphQL */ `
  subscription OnDeletePayType {
    onDeletePayType {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateOrganizationUser = /* GraphQL */ `
  subscription OnCreateOrganizationUser {
    onCreateOrganizationUser {
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
export const onUpdateOrganizationUser = /* GraphQL */ `
  subscription OnUpdateOrganizationUser {
    onUpdateOrganizationUser {
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
export const onDeleteOrganizationUser = /* GraphQL */ `
  subscription OnDeleteOrganizationUser {
    onDeleteOrganizationUser {
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
export const onCreateOrganizationAddress = /* GraphQL */ `
  subscription OnCreateOrganizationAddress {
    onCreateOrganizationAddress {
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
export const onUpdateOrganizationAddress = /* GraphQL */ `
  subscription OnUpdateOrganizationAddress {
    onUpdateOrganizationAddress {
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
export const onDeleteOrganizationAddress = /* GraphQL */ `
  subscription OnDeleteOrganizationAddress {
    onDeleteOrganizationAddress {
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
export const onCreateUserAddress = /* GraphQL */ `
  subscription OnCreateUserAddress {
    onCreateUserAddress {
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
export const onUpdateUserAddress = /* GraphQL */ `
  subscription OnUpdateUserAddress {
    onUpdateUserAddress {
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
export const onDeleteUserAddress = /* GraphQL */ `
  subscription OnDeleteUserAddress {
    onDeleteUserAddress {
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
export const onCreateUserPayType = /* GraphQL */ `
  subscription OnCreateUserPayType {
    onCreateUserPayType {
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
export const onUpdateUserPayType = /* GraphQL */ `
  subscription OnUpdateUserPayType {
    onUpdateUserPayType {
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
export const onDeleteUserPayType = /* GraphQL */ `
  subscription OnDeleteUserPayType {
    onDeleteUserPayType {
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
