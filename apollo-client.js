import {  ApolloClient,  InMemoryCache,  createHttpLink,} from '@apollo/client';
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new createHttpLink({
    uri: "https://semi-aquatics.myshopify.com/api/2021-07/graphql.json",
    headers: {
      'Accept' : 'application/graphql',
      'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
    },
    fetch,
  }),
})

export default client;