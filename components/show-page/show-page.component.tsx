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
  const [slideNumber, setSlideNumber] = useState(0);
  const isMobile = useIsMobile();
  const [createCart, createCartData] = useMutation(cartCreate);
  const [updateCartLineItems, updateCartLineItemsData] = useMutation(cartLinesUpdate);
  const [addCartLineItems, addCartLineItemsData] = useMutation(cartLineItemsAdd);
  const cart = useQuery(getCartQuery, { variables: { cartId: cookies.cartId } });
  const notify = (message = 'Item added to cart!') => toast(message, {
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
  const itemIsAdded = (resData: any) => {
    if (!resData.data) return;
    cart.refetch();

    createCartData.reset();
    notify();
  }
  const handleOnAddToCart = async (selected: any) => {
    return;
    try{
    if (cookies.cartId && cart.data.cart) {
      const existing_items = getCartCounts(cart);
      const quantity = existing_items[selected.node.id] ? existing_items[selected.node.id] + numberToAdd : numberToAdd;
      // If the product is already in cart, and we are adding more, update the cart
      if (existing_items[selected.node.id]) {
        const lineItemId = merchandiseIdToLineItemId(cart.data, selected.node.id);
        const cartInput = {
          variables: {
            cartId: cookies.cartId,
            quantity: quantity,
            lineItemId: lineItemId
          }
        }
        const res = await updateCartLineItems(cartInput)
        const anotherItemIsAdded = (resData: any) => {
          if (!resData.data) return;

          const updatedLine = resData.data.cartLinesUpdate.cart.lines.edges.find((li: any) => li.node.id === lineItemId);
          const updatedQuantity = updatedLine.node.quantity;

          if (updatedQuantity === quantity) {
            notify();
          } else {
            notify('There are no more available stock for this item.');
          }
        }
        anotherItemIsAdded(res);
        await updateCartLineItemsData.reset();
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
        const res = await addCartLineItems(cartInput);
        itemIsAdded(res);
        await addCartLineItemsData.reset();
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
      const res = await createCart(cartInput);
      await setNewCartCookie(res.data);
      itemIsAdded(res);
      await createCartData.reset();
    }
  }
  catch(e) {
    console.log('error', e);
    }
  }

  // @brainhubeu/react-carousel uses window, so during ssr this prevents code to break.
  if (typeof window === 'undefined') return <React.Fragment>loading</React.Fragment>;
  console.log(product);
  return (
    <React.Fragment>
    {
      isMobile ?
        <ShowPageMobile
          product={product}
          selected={selected}
          setSelected={setSelected}
          handleOnAddToCart={product.node.availableForSale ? handleOnAddToCart : () => {}}
          setNumberToAdd={setNumberToAdd}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
          numberToAdd={numberToAdd} />
      :
        <ShowPageDesktop
          product={product}
          selected={selected}
          setSelected={setSelected}
          handleOnAddToCart={product.node.availableForSale ? handleOnAddToCart : () => {}}
          setNumberToAdd={setNumberToAdd}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
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
