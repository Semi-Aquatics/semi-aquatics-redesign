import styles from './ShowPageMobile.module.scss';
import { useState } from 'react';

// Types
import { ShowPageChildProps } from '../../../interfaces/page_interface';

// Packages
import Carousel from '@brainhubeu/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@brainhubeu/react-carousel/lib/style.css';
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

// Components
import Button from "../../button/button.component";
import SizePicker from "../../size-picker/size-picker.component";
import NumberPicker from "../../number-picker/number-picker.component";
import Link from 'next/link';
import { BsCircleFill } from 'react-icons/bs';


const ShowPageMobile: React.FC<ShowPageChildProps> = ({ product,
  selected,
  setSelected,
  setNumberToAdd,
  numberToAdd,
  handleOnAddToCart,
  slideNumber,
  setSlideNumber }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const description = product.node.descriptionHtml;
  const slides = product.node.images.edges.map((image: any) =>
    (<img src={image.node.transformedSrc} alt={image.node.altText} />)
  )

  return(
    <div className={styles.showPageMobile}>
      <div className={`${styles.imageContainer} ${!descriptionOpen ? '' : styles.closed}`}>
        <div className={styles.sliderSides}>
          <div className={styles.changeImage} onClick={() => setSlideNumber(slideNumber === 0 ? 0 : slideNumber - 1)}></div>
          <div className={styles.changeImage} onClick={() => setSlideNumber(slideNumber === slides.length - 1 ? slides.length - 1 : slideNumber + 1)}></div>
        </div>
        <div className={styles.productCarousel}>
          <Carousel
            // @ts-ignore
            arrowLeft={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            arrowLeftDisabled={<FontAwesomeIcon icon={faAngleLeft} />}
            arrowRight={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            arrowRightDisabled={<FontAwesomeIcon icon={faAngleRight} />}
            addArrowClickHandler
            onChange={setSlideNumber}
            slides={slides}
            value={slideNumber}
          >
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
          <p>${product.node.variants.edges[0].node.priceV2.amount}0</p>
        </div>

        <div className={`${styles.description} ${descriptionOpen ? '' : styles.closed}`}>
          <div className={styles.openDescriptionBtn} onClick={() => setDescriptionOpen(!descriptionOpen)}>
            Description
            <div className={styles.icon}>
              <MdKeyboardArrowDown />
            </div>
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
                "Add to bag"
                :
                "Coming soon"
            }
          </Button>
          {/* TOOD MAKE IT EITHER COMING SOON OR SOLD OUT BASED ON TIMER */}
        </div>
      </div>

    </div >
  )
}


export default ShowPageMobile;
