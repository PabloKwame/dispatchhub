import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
  mutation LoginAdministrator(
    $phoneNumber: phoneNumber_String_NotNull_minLength_9_maxLength_13!
    $password: password_String_NotNull_minLength_6_maxLength_256!
  ) {
    loginAdministrator(phoneNumber: $phoneNumber, password: $password) {
      data {
        jwt
        phoneNumber
      }
      message
      success
      statusCode
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GetCurrentAdministrator {
    getCurrentAdministrator {
      data {
        username
        email
        phoneNumber
      }
      message
      success
      statusCode
    }
  }
`;
