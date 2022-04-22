import styles from './ShowPage.module.scss'
import React, { useState } from 'react';
import gql from 'graphql-tag'
import SizePicker from "../size-picker/size-picker.component";
import NumberPicker from "../number-picker/number-picker.component";
import Button from "../button/button.component";
import ImageCarousel from '../image-carousel/image-carousel.component';
import { useQuery, useMutation } from '@apollo/client';
import { createCartMutation } from '../../services/queries/mutations';
import Dropdown from '../dropdown/dropdown.component';
import { setCartId } from '../../redux/cart/cart.actions'
import { useCookies } from 'react-cookie';
import { getCartQuery } from '../../services/queries/queries';
import { getOrderedCart } from '../../utils/cartHelper';
import { ShowPageProps } from '../../interfaces/page_interface';

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
  const [createCart, { data, loading, error }] = useMutation(createCartMutation(selected.node.id));
  // const [updateLi, updateLiData] = useMutation(createCartMutation(selected.node.id, numberToAdd +  ));
  const dispatch = useDispatch();
  const cartId = useSelector((state: any) => state.cart.cartId);
  const cart = useQuery(getCartQuery(cookies.cartId));

  const addItemToCart = async (data: any) => {
    if(!data || !data.cartCreate || !data.cartCreate.cart) return;
    console.log(data.cartCreate.cart.id)
    setCookie('cartId', data.cartCreate.cart.id, { path: '/' });
  }

  const handleOnAddToCart = async (selected: any) => {
    // if (cookies.cartId){
    if (false){
      const existing_items = getOrderedCart(cart, selected);
      console.log();

      const currentAmount = existing_items.find((item: any) => item.id === selected.node.id)?.quantity;
      setCurrentNumber(currentAmount || 0);


    }else{
      const cartInput = {
        lineItems: [{ merchandiseId: selected.node.id, quantity: 1 }]
      }
      // await createCart({variables: cartInput})
      await createCart()
      await addItemToCart(data);
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
          <NumberPicker soldOut={!product.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd}/>
        </div>
        <div className={styles.half}>
          <Button
            soldOut={!product.node.availableForSale}
            isSelected={selected !== ''}
            selected={selected}
            mobile={true}
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

          {/* <NumberPicker soldOut={!product.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd}/> */}
          <Button soldOut={!product.node.availableForSale}
          isSelected={selected !== ''}
          selected={selected}
          mobile={false}
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

    </div>
    );
  };


  export default ShowPage;
