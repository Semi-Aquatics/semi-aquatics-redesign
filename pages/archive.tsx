import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout.component';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import withLayout from '../hocs/withLayout';
import styles from '../styles/Archive.module.scss'
import ArchivePage from '../components/archive-page/archive-page.component';

// Components
// @ts-ignore
const Archive: React.FC = ({drops}) => {
  return (
    <ArchivePage drops={drops}/>
  )
}

export async function getStaticProps(context: { query?: any; store?: any; }) {
  const { data } = await client.query({
      query: gql`
        query {
          collections(first: 50, reverse: true) {
              edges {
                  node {
                  title
                  id
                  products(first: 5) {
                      edges {
                          node {
                              id
                              title
                              images(first: 1) {
                                  edges {
                                    node {
                                      altText
                                      transformedSrc
                                    }
                                  }
                                }
                              variants(first: 5) {
                                edges {
                                  node {
                                    priceV2 {
                                      amount
                                      currencyCode
                                    }
                                  }
                                }
                              }
                          }
                      }
                  }
              }
            }
          }
        }
      `,
    });

    return {
      props: {
        drops: data.collections.edges.map((edge: any) => edge.node)
      },
   };
}

export default withLayout(Archive);

 