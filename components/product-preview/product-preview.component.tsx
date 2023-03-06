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
  const UPCOMING_ITEMS = isTimeLeft ? ["Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA5MjE4MDM=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA4ODkwMzU=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA3OTA3MzE=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA3NTc5NjM=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA0NjMwNTE="
] : ['']

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
