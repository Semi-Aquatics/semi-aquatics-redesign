import { useIsNewProduct } from '../../hooks/use-is-new-product';
import { useIsTimeLeft } from '../../hooks/use-is-time-left';
import styles from './ProductPreview.module.scss'
import Link from 'next/link'

interface ProductPreviewProps {
    image: string,
    title: string,
    id: string,
    isSoldOut: boolean,
    isArchive: boolean | undefined,
    isTimeLeft?: boolean
}

const ProductPreview:React.FC<ProductPreviewProps> = ({image, title, id, isArchive, isSoldOut, isTimeLeft }) => {
  const isNewProduct = useIsNewProduct(id)

    return (
      <div className={styles.productPreviewContainer}>
        <Link href={`drop/${id}`}>
          <div>
            {
              isSoldOut &&
              <div className={styles.soldOut}>
                    <h3>{ isNewProduct && isTimeLeft ? 'COMING SOON' : 'SOLD OUT'}</h3>
                </div>
            }
            <img src={image} alt={title}/>
            {
              !isArchive &&
              <h3 className={styles.cardTitle}>{title}</h3>
            }
          </div>
        </Link>
      </div>
    );
};

export default ProductPreview;
