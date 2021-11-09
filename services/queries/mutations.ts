import { gql } from 'graphql-tag';

export const CHECKOUT_CREATE_MUTATION = gql`
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
      lineItems(first: 9) {
        edges {
          node {
            title
            quantity
          }
        }
      }
    }
  }
  }
`;



// query: "mutation checkoutCreate($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input)\n  checkout {\n    id\n    webUrl\n    lineItems(first: 9) {\n      edges {\n        node {\n          title\n          quantity\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
// import { gql } from 'graphql-tag';

// export const CHECKOUT_CREATE_MUTATION = gql`
// mutation {
//   checkoutCreate(input: {
//     lineItems: [{ variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDUwMzI1MjE4MDM==", quantity: 1 }]
//   }) {
//     checkout {
//        id
//        webUrl
//        lineItems(first: 5) {
//          edges {
//            node {
//              title
//              quantity
//            }
//          }
//        }
//     }
//   }
// }
