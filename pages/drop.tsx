import Layout from '../components/layout/layout.component';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import DropPage from '../components/drop-page/drop-page.component'
import withLayout from '../hocs/withLayout';
import { useState } from 'react';
import { calculateTimeLeft } from '../utils/calculate_time_left';
import UpcomingDropPreview from '../components/upcoming-drop-preview/upcoming-drop-preview.component';
// import { PRODUCT_FRAGMENT } from "../services/fragments/product.fragment";

const Drop = (props: { drop: any }) => {
    const drop = props.drop;
    const DROP_DATE = new Date("2022/08/15 17:00:00 EST");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(DROP_DATE));
    // @ts-ignore
    const totalTimeLeft: number = Object.values(timeLeft).reduce((a: any, b: any) => a + b);
    if (totalTimeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft(DROP_DATE));
      }, 1000);
    }


    return (
      totalTimeLeft > 0 ?
      <div>
        {/* @ts-ignore */}
        <UpcomingDropPreview timeLeftObj={timeLeft} products={drop.products.edges} dropTitle={drop.title}/>
      </div>
        :
      <DropPage products={drop.products} dropName={drop.title}/>
    );
};

export async function getStaticProps(context: { query?: any; store?: any; }) {
    const { data } = await client.query({
        query: gql`
          query {
            collections(first: 1, reverse: true) {
                edges {
                    node {
                    title
                    id
                    products(first: 5) {
                        edges {
                            node {
                              id
                              title
                              availableForSale
                                images(first: 5) {
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
          drop: data.collections.edges[0].node
        },
     };
}

export default withLayout(Drop);
