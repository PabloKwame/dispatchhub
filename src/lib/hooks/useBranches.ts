import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';


const GET_BRANCHES = gql`
query GetBranches {
  getBranches {
    data {
      _id
      name
      branchLocation
      region
      coordinates {
        latitude
        longitude
      }
      branchContact
      branchCode
      enabled
      pickupOnly
      branchHasPinkBerry
      branchImage
      width
      height
      imagePublicId
      createdAt
      updatedAt
      operationTime {
        closingTime
        openingTime
      }
    }
    message
    success
    statusCode
  }
}
`;
export function useBranches (){
    const{error, loading, data} = useQuery(GET_BRANCHES);
    return{
        error,
        loading,
        branches: data?.getBranches?.data || [],
    }
}