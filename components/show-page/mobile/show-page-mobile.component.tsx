import styles from './ShowPageMobile.module.scss';
import { useState } from 'react';

// Types
import { ShowPageChildProps } from '../../../interfaces/page_interface';

// Packages
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { MdKeyboardArrowDown } from 'react-icons/md';

// Components
import Button from "../../button/button.component";
import SizePicker from "../../size-picker/size-picker.component";
import NumberPicker from "../../number-picker/number-picker.component";
import Link from 'next/link';


const ShowPageMobile: React.FC<ShowPageChildProps> = ({ product, selected, setSelected, setNumberToAdd, numberToAdd, handleOnAddToCart }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const description = product.node.descriptionHtml;
  const slides = product.node.images.edges.map((image: any) =>
    (<img src={image.node.transformedSrc} alt={image.node.altText} />)
  )

  return(
    <div className={styles.showPageMobile}>
      <div className={`${styles.imageContainer} ${!descriptionOpen ? '' : styles.closed}`}>

        <div className={styles.productCarousel}>
          <Carousel
            // @ts-ignore
            arrowLeft={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            arrowLeftDisabled={<FontAwesomeIcon icon={faAngleLeft} />}
            arrowRight={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            arrowRightDisabled={<FontAwesomeIcon icon={faAngleRight} />}
            addArrowClickHandler
            slides={slides}
          >
          </Carousel>
        </div>

      </div>
      <div className={styles.flexGrow1}></div>

      <div className={styles.mobileInfo}>
        <div className={styles.titlePrice}>
          <h1>{product.node.title}</h1>
          <p>${product.node.variants.edges[0].node.priceV2.amount}0</p>
        </div>

        <div className={`${styles.description} ${descriptionOpen ? '' : styles.closed}`}>
          <div className={styles.openDescriptionBtn} onClick={() => setDescriptionOpen(!descriptionOpen)}>
            <div className={styles.icon}>
              <MdKeyboardArrowDown />
            </div>
            Description
          </div>
          <div className={styles.descriptionInner} dangerouslySetInnerHTML={{ __html: description }}></div>
          <p className={styles.sizingLink}>
            <Link href='/sizing'>Sizing</Link>
          </p>
        </div>
      </div>
      <div className={styles.sizePickerContainer}>
        <SizePicker variants={product.node.variants.edges} chosenVariant={selected} setChosenVariant={setSelected} />
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
  )
}


export default ShowPageMobile;
