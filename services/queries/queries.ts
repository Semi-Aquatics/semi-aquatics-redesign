import { gql } from 'graphql-tag';

export const getCartQuery = (cartId: string) => {
    return gql`
    query {
      cart(id: "${cartId}") {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product{
                    title
                  }
                  image {
                    altText
                    transformedSrc
                  }

                }
              }
              attributes {
                key
                value
              }
            }
          }
        }
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
        buyerIdentity {
          email
          phone
          customer {
            id
          }
          countryCode
        }
      }
    }
    `
}

export const getCheckoutUrl = (cartId: string) => {
    return gql`
    query checkoutURL {
        cart(id: "${cartId}") {
          checkoutUrl
        }
      }
    `
}
