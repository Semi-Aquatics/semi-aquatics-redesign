import styles from './ShowPage.module.scss'
import React, { useState } from 'react';
import gql from 'graphql-tag'
import SizePicker from "../size-picker/size-picker.component";
import NumberPicker from "../number-picker/number-picker.component";
import Button from "../button/button.component";
import ImageCarousel from '../image-carousel/image-carousel.component';
import { useMutation } from '@apollo/client';
import { CHECKOUT_CREATE_MUTATION } from '../../services/queries/mutations';

   
const CheckoutFragment = gql`
fragment CheckoutFragment on Checkout {
  id
  webUrl
  totalTax
  subtotalPrice
  totalPrice
  lineItems (first: 250) {
    edges {
      node {
        id
        title
        variant {
          id
          title
          image {
            src
          }
          price
        }
        quantity
      }
    }
  }
}
`;

export const createCheckoutMutation = gql`
mutation checkoutCreate ($input: CheckoutCreateInput!){
  checkoutCreate(input: $input) {
    userErrors {
      message
      field
    }
    checkout {
      ...CheckoutFragment
    }
  }
}
${CheckoutFragment}
`;

interface ShowPageProps {
  product: any
}

const ShowPage:React.FC<ShowPageProps> = ({product}) => {
  
  const [numberToAdd, setNumberToAdd] = useState(1);
  const description = product.node.descriptionHtml;
  const [selected, setSelected] = useState('');
  
  // TODO: this does not work right now!!!!
  const [createCheckout, { data, loading, error }] = useMutation(createCheckoutMutation);
  
  if (loading) return 'Loading...';
  if (error) console.log(error);
  if (error) return `Error! ${error.message}`;

  
  // TODO: this does not work right now!!!!
  const handleOnAddToCart = async (selected: any) => {
    const cartInput = {
      lineItems: [{ variantId: selected.node.id, quantity: 1 }]
    }     

    await createCheckout({ variables: {input: cartInput } })
    
    await console.log(data);  
    // fetch('/graphql', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     CHECKOUT_CREATE_MUTATION,
    //     variables: {
    //       input: {
    //         lineItems: [{ variantId: selected.node.id, quantity: 1 }]
    //       }
    //     }
    //   })
    // })
    //   .then(r => r.json())
    //   .then(data => console.log('data returned:', data)); 
  }
  
  return (
    <div className={styles.showPageContainer}>
      <div className={styles.productDescription}>
        <h1>{product.node.title}</h1>
        <div className={styles.description} dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
      <ImageCarousel images={product.node.images.edges} altText={product.node.title}/>
      <div className={styles.productAddToCart}>
        <h2 className={styles.productPrice}>${product.node.variants.edges[0].node.priceV2.amount}</h2> 
        <SizePicker variants={product.node.variants.edges} chosenVariant={selected} setChosenVariant={setSelected}/>
        <NumberPicker soldOut={!product.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd}/>
        <Button soldOut={!product.node.availableForSale} 
        isSelected={selected !== ''} 
        selected={selected}
        onClick={handleOnAddToCart}>
        {
          product.node.availableForSale ?
          "Add to cart"
          :
          "Sold out"
        }
        </Button>
      
      </div>
    
    </div>
    );
  };
  
  
  
  export default ShowPage;
 