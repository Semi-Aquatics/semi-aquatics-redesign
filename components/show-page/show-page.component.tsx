import styles from './ShowPage.module.scss'
import { ShowPageProps } from '../../interfaces/page_interface';

// packages
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useQuery, useMutation, ApolloError } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// queries
import { getCartQuery } from '../../services/queries/queries';
import { cartCreate, cartLinesUpdate, cartLineItemsAdd } from '../../services/queries/mutations';

// helper functions
import { getCartCounts, merchandiseIdToLineItemId } from '../../utils/cartHelper';

// components
import ShowPageDesktop from './desktop/show-page-desktop.component';
import ShowPageMobile from './mobile/show-page-mobile.component';

// hooks
import { useIsMobile } from '../../hooks/use-is-mobile';


const ShowPage: React.FC<ShowPageProps> = ({ product }) => {
  const [cookies, setCookie] = useCookies(['cartId']);
  const [numberToAdd, setNumberToAdd] = useState(1);
  const [selected, setSelected] = useState(product.node.variants.edges[0]);
  const isMobile = useIsMobile();
  const [createCart, createCartData] = useMutation(cartCreate);
  const [updateCartLineItems, updateCartLineItemsData] = useMutation(cartLinesUpdate);
  const [addCartLineItems, addCartLineItemsData] = useMutation(cartLineItemsAdd);
  const cart = useQuery(getCartQuery, { variables: { cartId: cookies.cartId } });
  const notify = () => toast('Item added to cart!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });


  const setNewCartCookie = async (data: any) => {
    if (!data) return;
    setCookie('cartId', data.cartCreate.cart.id, { path: '/' });
  }

  const handleOnAddToCart = async (selected: any) => {
    // todo: if result returns with same number, notify user that there isn't enough in quantity AND/OR limit to what's available
    if (cookies.cartId) {
      const existing_items = getCartCounts(cart);
      const quantity = existing_items[selected.node.id] ? existing_items[selected.node.id] + numberToAdd : numberToAdd;
      // If the product is already in cart, and we are adding more, update the cart
      if (existing_items[selected.node.id]) {
        const lineItemId = merchandiseIdToLineItemId(cart.data, selected.node.id);
        console.log(lineItemId)
        const cartInput = {
          variables: {
            cartId: cookies.cartId,
            quantity: quantity,
            lineItemId: lineItemId
          }
        }
        await updateCartLineItems(cartInput)
        await console.log(updateCartLineItemsData)
        await notify();

      }
      // If the product is not in cart, add it
      else {
        const cartInput = {
          variables: {
            cartId: cookies.cartId,
            quantity: quantity,
            merchandiseId: selected.node.id
          }
        }
        await addCartLineItems(cartInput)
        await console.log(addCartLineItemsData)
        await notify();
      }
    }
    // If the cart doesn't exist, create it
    else {
      const cartInput = {
        variables: {
          quantity: numberToAdd,
          merchandiseId: selected.node.id
        }
      }
      await createCart(cartInput)
      await setNewCartCookie(createCartData.data);
      await notify();
    }
  }

  // @brainhubeu/react-carousel uses window, so during ssr this prevents code to break.
  if (typeof window === 'undefined') return <React.Fragment>loading</React.Fragment>;

  return (
    <React.Fragment>
    {
      isMobile ?
        <ShowPageMobile
          product={product}
          selected={selected}
          setSelected={setSelected}
          handleOnAddToCart={handleOnAddToCart}
          setNumberToAdd={setNumberToAdd}
          numberToAdd={numberToAdd} />
      :
        <ShowPageDesktop
          product={product}
          selected={selected}
          setSelected={setSelected}
          handleOnAddToCart={handleOnAddToCart}
          setNumberToAdd={setNumberToAdd}
          numberToAdd={numberToAdd} />
    }

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      draggablePercent={0}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover={false} />
    </React.Fragment>
  );
};


export default ShowPage;
