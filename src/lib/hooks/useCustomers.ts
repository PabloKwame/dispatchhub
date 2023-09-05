import { useQuery, gql } from "@apollo/client";

const GET_CUSTOMERS = gql`
query GetCustomers {
    getCustomers {
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

export function useCustomers(){

    const {error, loading, data} = useQuery(GET_CUSTOMERS);

    return{
        error,
        loading,
        customers: data?.getCustomers?.data || [],    
    }
}
