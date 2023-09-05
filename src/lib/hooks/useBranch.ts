import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';

const GET_BRANCH_BY_NAME = gql`
  query GetBranchByName($branchName: String!) {
    getBranchesByName(name: $branchName) {
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

export function useBranchByName(branchName) {
  const { data, error, loading } = useQuery(GET_BRANCH_BY_NAME, {
    variables: {
      branchName,
    },
  });

  return {
    branch: data?.getBranchesByName?.data || [],
    error,
    loading,
  };
}
