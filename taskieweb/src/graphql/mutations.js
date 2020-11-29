/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPayType = /* GraphQL */ `
  mutation CreatePayType(
    $input: CreatePayTypeInput!
    $condition: ModelPayTypeConditionInput
  ) {
    createPayType(input: $input, condition: $condition) {
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
export const updatePayType = /* GraphQL */ `
  mutation UpdatePayType(
    $input: UpdatePayTypeInput!
    $condition: ModelPayTypeConditionInput
  ) {
    updatePayType(input: $input, condition: $condition) {
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
export const deletePayType = /* GraphQL */ `
  mutation DeletePayType(
    $input: DeletePayTypeInput!
    $condition: ModelPayTypeConditionInput
  ) {
    deletePayType(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createOrganizationUser = /* GraphQL */ `
  mutation CreateOrganizationUser(
    $input: CreateOrganizationUserInput!
    $condition: ModelOrganizationUserConditionInput
  ) {
    createOrganizationUser(input: $input, condition: $condition) {
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
export const updateOrganizationUser = /* GraphQL */ `
  mutation UpdateOrganizationUser(
    $input: UpdateOrganizationUserInput!
    $condition: ModelOrganizationUserConditionInput
  ) {
    updateOrganizationUser(input: $input, condition: $condition) {
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
export const deleteOrganizationUser = /* GraphQL */ `
  mutation DeleteOrganizationUser(
    $input: DeleteOrganizationUserInput!
    $condition: ModelOrganizationUserConditionInput
  ) {
    deleteOrganizationUser(input: $input, condition: $condition) {
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
export const createOrganizationAddress = /* GraphQL */ `
  mutation CreateOrganizationAddress(
    $input: CreateOrganizationAddressInput!
    $condition: ModelOrganizationAddressConditionInput
  ) {
    createOrganizationAddress(input: $input, condition: $condition) {
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
export const updateOrganizationAddress = /* GraphQL */ `
  mutation UpdateOrganizationAddress(
    $input: UpdateOrganizationAddressInput!
    $condition: ModelOrganizationAddressConditionInput
  ) {
    updateOrganizationAddress(input: $input, condition: $condition) {
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
export const deleteOrganizationAddress = /* GraphQL */ `
  mutation DeleteOrganizationAddress(
    $input: DeleteOrganizationAddressInput!
    $condition: ModelOrganizationAddressConditionInput
  ) {
    deleteOrganizationAddress(input: $input, condition: $condition) {
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
export const createUserAddress = /* GraphQL */ `
  mutation CreateUserAddress(
    $input: CreateUserAddressInput!
    $condition: ModelUserAddressConditionInput
  ) {
    createUserAddress(input: $input, condition: $condition) {
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
export const updateUserAddress = /* GraphQL */ `
  mutation UpdateUserAddress(
    $input: UpdateUserAddressInput!
    $condition: ModelUserAddressConditionInput
  ) {
    updateUserAddress(input: $input, condition: $condition) {
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
export const deleteUserAddress = /* GraphQL */ `
  mutation DeleteUserAddress(
    $input: DeleteUserAddressInput!
    $condition: ModelUserAddressConditionInput
  ) {
    deleteUserAddress(input: $input, condition: $condition) {
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
export const createUserPayType = /* GraphQL */ `
  mutation CreateUserPayType(
    $input: CreateUserPayTypeInput!
    $condition: ModelUserPayTypeConditionInput
  ) {
    createUserPayType(input: $input, condition: $condition) {
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
export const updateUserPayType = /* GraphQL */ `
  mutation UpdateUserPayType(
    $input: UpdateUserPayTypeInput!
    $condition: ModelUserPayTypeConditionInput
  ) {
    updateUserPayType(input: $input, condition: $condition) {
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
export const deleteUserPayType = /* GraphQL */ `
  mutation DeleteUserPayType(
    $input: DeleteUserPayTypeInput!
    $condition: ModelUserPayTypeConditionInput
  ) {
    deleteUserPayType(input: $input, condition: $condition) {
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
