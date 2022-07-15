import styles from './ShowPageDesktop.module.scss';

// Types
import { ShowPageChildProps } from '../../../interfaces/page_interface';

// Packages
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Components
import Button from "../../button/button.component";
import Dropdown from '../../dropdown/dropdown.component';




const ShowPageDesktop: React.FC<ShowPageChildProps> = ({ product, selected, setSelected, setNumberToAdd, numberToAdd, handleOnAddToCart }) => {
  const slides = product.node.images.edges.map((image: any) =>
  (<img src={image.node.transformedSrc} alt={image.node.altText} />)
  )
  const description = product.node.descriptionHtml;

  return (
    <div className={styles.showPageDesktopContainer}>
      <div className={styles.leftSide}>
        <div className={styles.productCarousel}>
          <Carousel
            // @ts-ignore
            arrowLeft={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            arrowLeftDisabled={<FontAwesomeIcon icon={faAngleLeft} />}
            arrowRight={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            arrowRightDisabled={<FontAwesomeIcon icon={faAngleRight} />}
            addArrowClickHandler
            slides={slides}>
          </Carousel>
        </div>
      </div>
      <div className={styles.productDescription}>
        <div className={styles.priceAndTitle}>
          <h1>{product.node.title.split(' -')[0]}</h1>
          <h2>${product.node.variants.edges[0].node.priceV2.amount}0</h2>
        </div>

        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
        <div className={styles.productAddToCart}>
            <div className={styles.sizeAndNumber}>
              <Dropdown items={product.node.variants.edges} selectItem={setSelected} selectedItem={selected} />
              <Dropdown items={[1, 2, 3, 4, 5]} selectItem={setNumberToAdd} selectedItem={numberToAdd} />
            </div>

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
    </div>
    )
  }


  export default ShowPageDesktop;
