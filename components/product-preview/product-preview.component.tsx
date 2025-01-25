import React from 'react';
import { useIsNewProduct } from '../../hooks/use-is-new-product';
import styles from './ProductPreview.module.scss';
import Link from 'next/link';

interface ProductPreviewProps {
  image: string;
  title: string;
  id: string;
  isSoldOut: boolean;
  isArchive: boolean;
  price?: string;
  isTimeLeft?: boolean;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  image,
  title,
  id,
  isSoldOut,
  isArchive,
  price,
  isTimeLeft,
}) => {
  // const isNewProduct = useIsNewProduct(id);
  const isNewProduct = false
  const deconstructedId = id.split('/').splice(-1)[0];

  return (
    <div className={styles.productPreviewContainer}>
      <Link href={`/drop/${deconstructedId}`}>
        <div>
          {isSoldOut && (
            <div className={styles.soldOut}>
              <h3>{isNewProduct && isTimeLeft ? 'COMING SOON' : 'SOLD OUT'}</h3>
            </div>
          )}
          <div className={styles.imageContainer}>
            <img src={image} alt={title} />
          </div>
          {!isArchive && (
            <div className={styles.previewDetails}>
              <h3 className={styles.cardDetail}>{title}</h3>
              {price && parseInt(price) > 0 && <h3 className={styles.cardDetail}>${price}0</h3> }
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductPreview;
