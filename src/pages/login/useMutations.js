import { useMutation , gql} from '@apollo/client';
import React from 'react';



 export const useMutations = () =>{
  const SIGN_IN_MUTATION = gql`
  mutation LoginAdministrator($phoneNumber: String!, $password: String!) {
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
`

  return{

  }
}

