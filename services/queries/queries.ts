import { gql } from 'graphql-tag';

export const getCartQuery = gql`
query getCartQuery($cartId: ID!) {
  cart(
    id: $cartId
  ) {
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
              title
              priceV2 {
                amount
                currencyCode
              }
              image {
                transformedSrc
              }
              product {
                title
              }
            }
          }
        }
      }
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
  }
}

    `


export const getCheckoutUrl = (cartId: string) => {
    return gql`
    query checkoutURL {
        cart(id: "${cartId}") {
          checkoutUrl
        }
      }
    `
}
