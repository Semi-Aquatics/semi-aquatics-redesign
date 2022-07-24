import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import { gql, useQuery } from '@apollo/client';
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import withLayout from '../../hocs/withLayout'
import ShowPage from "../../components/show-page/show-page.component";

const Product = (props: { product: any }) => {
  return (
    <ShowPage product={props.product}/>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { data } = await client.query({
      query: gql`
      query {
        node(id: "${context.params.productId}") {
          ...on Product {
          title
          description
          descriptionHtml
          availableForSale
          images(first: 10) {
            edges {
              node {
                altText
                transformedSrc
              }
            }
          }
          options {
            id
            name
            values
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                priceV2 {
                  amount
                }
                selectedOptions {
                  name
                  value
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
        product: data
      },
   };
}


export default withLayout(Product);
