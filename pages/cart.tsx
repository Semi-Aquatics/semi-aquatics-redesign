import withLayout from '../hocs/withLayout';
import { useState } from 'react';
import styles from '../styles/Cart.module.scss'
import { useSelector } from 'react-redux';
import {gql,  useQuery, useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { getCartQuery, getCheckoutUrl } from '../services/queries/queries';
import React from 'react';

// Components
type CartState = {
    cart: {
        cartId: String
    }
}

const Cart: React.FC = ({}) => {
    const cartId = useSelector((state: CartState) => state.cart.cartId);

    const [cookies, setCookie] = useCookies(['cartId']);
    const { data, loading, error, refetch } = useQuery(getCartQuery(cookies.cartId));
    const checkoutUrl = useQuery(getCheckoutUrl(cookies.cartId));
    if (loading) return <p>Loading data...</p>;
    if (error) return (
      <React.Fragment>
        <p>Oops, error! </p>
        <button onClick={() => refetch()}>Please try again!</button>
      </React.Fragment>
    );
  console.log(data)
    return (
    <div className={styles.cartContainer}>
      <h1>Your Cart</h1>
        <div className={styles.cartProductContainer}>
          <div className={styles.lineItems}>
            {
              data.cart.lines.edges.map((li: any) =>
                <div className={styles.lineItem}>
                  <img src={li.node.merchandise.image.transformedSrc} alt={li.node.merchandise.product.title} />
                  <div>
                    <p>{li.node.merchandise.product.title}</p>
                    <p>{li.node.quantity}</p>
                  </div>
                </div>
              )
            }
          </div>



          <div className={styles.flex_grower}></div>
          <div className={styles.checkoutBottomContainer}>
            <div className={styles.checkoutText}>
              <p>Subtotal:</p>
              <p>${data.cart.estimatedCost.subtotalAmount?.amount}0</p>
            </div>
            <a href={checkoutUrl.data?.cart?.checkoutUrl}>
              <div className={styles.checkoutBtn}>
                Continue to checkout
              </div>
            </a>
          </div>
        </div>
    </div>
    )
}

export default withLayout(Cart);

