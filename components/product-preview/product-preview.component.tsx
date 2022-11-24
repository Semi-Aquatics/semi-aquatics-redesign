import styles from './ProductPreview.module.scss'
import Link from 'next/link'

interface ProductPreviewProps {
    image: string,
    title: string,
    id: string,
    isSoldOut: boolean,
    isArchive: boolean | undefined
}

const ProductPreview:React.FC<ProductPreviewProps> = ({image, title, id, isArchive, isSoldOut}) => {
    const UPCOMING_ITEMS = ['Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAxODAxNzE=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAxNDc0MDM=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNDk3ODY5NTU=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAwMTYzMzE=', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3OTIwNTAwODE4Njc=']

    return (
      <div className={styles.productPreviewContainer}>
        <Link href={`drop/${id}`}>
          <div>
            {
              isSoldOut &&
              <div className={styles.soldOut}>
                    <h3>{ UPCOMING_ITEMS.includes(id) ? 'COMING SOON' : 'SOLD OUT'}</h3>
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
