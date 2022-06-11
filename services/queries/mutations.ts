import gql from 'graphql-tag';


export const cartCreate = gql`
  mutation cartCreate($quantity: Int!, $merchandiseId: ID!) {
    cartCreate(input: {
      lines: [
        {
          quantity: $quantity
          merchandiseId: $merchandiseId
        }
      ]
      attributes: { key: "cart_attribute", value: "This is a cart attribute" }
    }
  ) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
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
`;

export const cartLineItemsAdd = gql`
mutation cartLinesAdd($cartId: ID!, $quantity: Int!, $merchandiseId: ID!) {
  cartLinesAdd(cartId: $cartId, lines: [
    {
      quantity: $quantity
      merchandiseId: $merchandiseId
    }
  ]) {
    cart {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}

`

export const cartLinesUpdate = gql`
mutation cartLinesUpdate($cartId: ID!, $quantity: Int!, $lineItemId: ID!) {
  cartLinesUpdate(
    cartId: $cartId
    lines: {
      id: $lineItemId
      quantity: $quantity
    }
  ) {
    cart {
      id
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }

    }
  }
}
`
