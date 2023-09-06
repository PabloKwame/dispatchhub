import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
            query GetProducts {
              getProducts {
                data {
                  _id
                  productCode
                  productImage
                  name
                  unitPrice
                  width
                  height
                  family
                  dominantColor
                  imagePublicId
                  size
                  productionCategory
                  description
                  activatedBranches
                  enabled
                }
                message
                success
                statusCode
              }
}
`;
