import styles from './ShowPage.module.scss'
import { ShowPageProps } from '../../interfaces/page_interface';

// packages
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useQuery, useMutation, ApolloError } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// queries
import { getCartQuery } from '../../services/queries/queries';
import { cartCreate, cartLinesUpdate, cartLineItemsAdd } from '../../services/queries/mutations';

// helper functions
import { getCartCounts, merchandiseIdToLineItemId } from '../../utils/cartHelper';

// components
import SizePicker from "../size-picker/size-picker.component";
import NumberPicker from "../number-picker/number-picker.component";
import ImageCarousel from '../image-carousel/image-carousel.component';
import Dropdown from '../dropdown/dropdown.component';
import Button from "../button/button.component";

// hooks
import { useIsMobile } from '../../hooks/use-is-mobile';

// icons
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';


const ShowPage:React.FC<ShowPageProps> = ({product}) => {
  const [cookies, setCookie] = useCookies(['cartId']);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [numberToAdd, setNumberToAdd] = useState(1);
  const [selected, setSelected] = useState(product.node.variants.edges[0]);
  const description = product.node.descriptionHtml;
  const isMobile = useIsMobile();
  const [descriptionOpen, setDescriptionOpen] = useState(false);
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
    if(!data) return;
    setCookie('cartId', data.cartCreate.cart.id, { path: '/' });
  }

  const handleOnAddToCart = async (selected: any) => {
          // todo: if result returns with same number, notify user that there isn't enough in quantity AND/OR limit to what's available
    if (cookies.cartId){
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
      else{
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
    else{
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

  return (
    isMobile ?
    <div className={styles.showPageMobile}>
    <div className={`${styles.imageContainer} ${ !descriptionOpen ? '' :  styles.closed }`}>

    <img src={product.node.images.edges[0].node.transformedSrc} alt='image- TODOreplace this' />
    {/* <ImageCarousel images={product.node.images.edges} altText={product.node.title}/> */}

    </div>
    <div className={styles.flexGrow1}></div>

    <div className={styles.mobileInfo}>
    <div className={styles.titlePrice}>
    <h1>{product.node.title}</h1>
    <p>${product.node.variants.edges[0].node.priceV2.amount}0</p>
    </div>

    <div className={`${styles.description} ${ descriptionOpen ? '' :  styles.closed }`}>
    <div className={styles.openDescriptionBtn} onClick={() => setDescriptionOpen(!descriptionOpen)}>
    Description
    <div className={styles.icon}>
    <MdKeyboardArrowDown />
    </div>
    </div>
    <div className={styles.descriptionInner} dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
    </div>
    <div className={styles.sizePickerContainer}>
    <SizePicker variants={product.node.variants.edges} chosenVariant={selected} setChosenVariant={setSelected}/>
    </div>

    <div className={styles.addToCart}>
    <div className={styles.half}>
    <NumberPicker soldOut={!selected.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd}/>
    </div>
    <div className={styles.half}>
    <Button
    soldOut={!selected.node.availableForSale}
    isSelected={selected !== ''}
    selected={selected}
    mobile={true}
    onClick={handleOnAddToCart}>
    {
      selected.node.availableForSale ?
      "Add to cart"
      :
      "Sold out"
    }
    </Button>
    </div>
    </div>

    </div >
    :
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // DESKTOP VERSION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <div className={styles.showPageContainer}>
    <div className={styles.leftSide}>
    <ImageCarousel images={product.node.images.edges} altText={product.node.title}/>
    </div>
    <div className={styles.productDescription}>
    <div className={styles.priceAndTitle}>
    <h1>{product.node.title.split(' -')[0]}</h1>
    <h2>${product.node.variants.edges[0].node.priceV2.amount}0</h2>
    </div>


    <div className={styles.description} dangerouslySetInnerHTML={{__html: description}}></div>
    <div className={styles.productAddToCart}>
    <div className={styles.sizeAndNumber}>
    <Dropdown items={product.node.variants.edges} selectItem={setSelected} selectedItem={selected} />
    <Dropdown items={[1, 2, 3, 4, 5]} selectItem={setNumberToAdd} selectedItem={numberToAdd} />
    </div>
    {/* <SizePicker variants={product.node.variants.edges} chosenVariant={selected} setChosenVariant={setSelected}/> */}

    {/* <NumberPicker soldOut={!selected.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd}/> */}
    <Button soldOut={!selected.node.availableForSale}
    isSelected={selected !== ''}
    selected={selected}
    mobile={false}
    onClick={handleOnAddToCart}>
    {
      selected.node.availableForSale ?
      "Add to cart"
      :
      "Sold out"
    }
    </Button>
    </div>
    </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          draggablePercent={0}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
        />
    </div>
    );
  };


  export default ShowPage;
