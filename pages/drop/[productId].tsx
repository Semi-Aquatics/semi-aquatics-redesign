import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import { gql, useQuery } from '@apollo/client';
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import withLayout from '../../hocs/withLayout'
import ShowPage from "../../components/show-page/show-page.component";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const UPCOMING_ITEMS = ['Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAxODAxNzE=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAxNDc0MDM=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNDk3ODY5NTU=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAwMTYzMzE=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAwODE4Njc=']


const Product = (props: { product: any }) => {
  const passwordGuessed = useSelector((state: any) => state.user.passwordGuessed);
  const router = useRouter();

  useEffect(() => {
    if(!passwordGuessed && UPCOMING_ITEMS.includes(props.product.node.id)) {
      router.push('/drop');
    }
  }, [])

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
          id
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
