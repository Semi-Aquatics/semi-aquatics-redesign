import styles from './ShowPageMobile.module.scss';
import { useState } from 'react';

// Types
import { ShowPageChildProps } from '../../../interfaces/page_interface';

// Packages
import Carousel from "nuka-carousel"

import { MdKeyboardArrowDown } from 'react-icons/md';

// Components
import Button from "../../button/button.component";
import SizePicker from "../../size-picker/size-picker.component";
import NumberPicker from "../../number-picker/number-picker.component";
import Link from 'next/link';
import { BsCircleFill } from 'react-icons/bs';
import React from 'react';

// Helpers
import { variantAvailability } from '../utils'
import { useIsTimeLeft } from '../../../hooks/use-is-time-left';

const ShowPageMobile: React.FC<ShowPageChildProps> = ({ product,
  selected,
  setSelected,
  setNumberToAdd,
  numberToAdd,
  handleOnAddToCart,
  slideNumber,
  isNewProduct,
  setSlideNumber
  }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(!isNewProduct);
  const isTimeLeft = useIsTimeLeft();
  const description = product.node.descriptionHtml;
  const slides = product.node.images.edges.map((image: any) =>
    (<div key={image.node.altText} style={{textAlign: 'center'}}>
        <img src={image.node.transformedSrc} alt={image.node.altText} />
    </div>
    )
  )

  return(
    <div className={styles.showPageMobile}>
      <div className={`${styles.imageContainer} ${!descriptionOpen || !isNewProduct ? '' : styles.closed}  ${isNewProduct ? '' : styles.imageContainerLarge}`}>
        <div className={styles.productCarousel}>
          <Carousel
            slideIndex={slideNumber}
            withoutControls={true}
            afterSlide={(index: any) => setSlideNumber(index)}
          >
            {slides}
          </Carousel>

          <div className={styles.dotsContainer}>
            {
              slides.map((_: any, index: any) => (
                <div className={`${styles.dot} ${index == slideNumber ? styles.colored : ''}`} key={index}>
                  <BsCircleFill />
                </div>
              ))}
          </div>
        </div>

      </div>
      <div className={styles.flexGrow1}></div>

      <div className={styles.mobileInfo}>
        <div className={styles.titlePrice}>
          <h1>{product.node.title}</h1>
          {
            isNewProduct &&
              <p>${product.node.variants.edges[0].node.priceV2.amount}0</p>
          }
        </div>

        <div className={`${styles.description} ${descriptionOpen ? '' : styles.closed}`}>
          <div className={styles.openDescriptionBtn} onClick={() => setDescriptionOpen(!descriptionOpen)}>
            Description
            { isNewProduct && 
            <div className={styles.icon}>
              <MdKeyboardArrowDown />
            </div>
            }
          </div>
          <div className={isNewProduct ? styles.descriptionInner : styles.descriptionInnerLarge} dangerouslySetInnerHTML={{ __html: description }}></div>
          <p className={styles.sizingLink}>
            <Link href='/sizing'>Sizing</Link>
          </p>
        </div>
      </div>
      {
        isNewProduct &&
      <React.Fragment>
        <div className={styles.sizePickerContainer}>
          <SizePicker variants={product.node.variants.edges}  availability={variantAvailability(product)}chosenVariant={selected} setChosenVariant={setSelected} />
        </div>
        <div className={styles.addToCart}>
          <div className={styles.half}>
            <NumberPicker soldOut={!selected.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd} />
          </div>
          <div className={styles.half}>
            <Button
              soldOut={!selected.node.availableForSale}
              isSelected={selected !== ''}
              selected={selected}
              mobile={true}
              onClick={() => handleOnAddToCart(selected)}>
              {
                selected.node.availableForSale ?
                  "Add to bag"
                  :
                  isNewProduct && isTimeLeft?
                  "Coming soon"
                  :
                  "Sold Out"
              }
            </Button>
          </div>
        </div>
      </React.Fragment>
    }
    </div >
  )
}


export default ShowPageMobile;
