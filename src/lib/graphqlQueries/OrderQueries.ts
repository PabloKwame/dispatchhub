import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query GetAllCustomerOrders {
    getAllCustomerOrders {
      data {
        _id
        orderCode
        customerId {
          _id
          username
          phoneNumber
          email
          deviceToken
          enabled
          isCivilServant
        }
        status
        productTotalPrice
        deliveryFee
        branchId
        address
        location {
          latitude
          longitude
        }
        readyAt
        completedAt
        deliveredAt
        cancelledAt
        acceptedAt
        deliveringAt
        PaymentOption
        pickup
        paid
        discount
        packages {
          quantity
          productId {
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
          
            enabled
          }
          extras {
            _id
           
          }
        }
        otp
        createdAt
        updatedAt
        assignedManager {
          _id
          username
          phoneNumber
          email
          branchId {
            _id
            branchCode
          }
          deviceToken
          enabled
        }
        assignedSalesPerson {
          _id
          username
          phoneNumber
          email
          deviceToken
          enabled
        }
        comment
        couponCashWorth
      }
      message
      success
      statusCode
    }
  }
`;
