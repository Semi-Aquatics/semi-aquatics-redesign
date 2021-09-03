import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://semi-aquatics.myshopify.com/api/2021-07/graphql.json",
    cache: new InMemoryCache(),
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
    }
});

export default client;

// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
  //   uri: '/graphql',
  // });
  

// // const client = new ApolloClient({
// //     uri: "https://semi-aquatics.myshopify.com/admin/api/2021-07/graphql.json",
// //     cache: new InMemoryCache(),
// // });


// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     // const token = localStorage.getItem('token');
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         // X-Shopify-Storefront-Access-Token: {'a841eca62f514cb4af9d650a38075fbf'}
//       }
//     }
//   });
  
//   const client = new ApolloClient({
//     link: "https://semi-aquatics.myshopify.com/admin/api/2021-07/graphql.json",
//     cache: new InMemoryCache()
//   });
  
//   export default client;
