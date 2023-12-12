// Packages
import { gql } from "@apollo/client";
import client from "../apollo-client";

// HOCs
import withLayout from '../hocs/withLayout';

// Components
import ArchivePage from '../components/archive-page/archive-page.component';

interface ArchivePageProps {
  drops: any
}
const Archive: React.FC <ArchivePageProps> = ({ drops }) => {
  const sortedDrops = drops.sort((dropA: any, dropB: any) => parseInt(dropB.title.split(' ')[1]) -  parseInt(dropA.title.split(' ')[1]));
  const withoutCurrentDrop = drops.slice(-(sortedDrops.length - 1))
  
  return (
    <ArchivePage drops={withoutCurrentDrop}/>
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
                  products(first: 20) {
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

