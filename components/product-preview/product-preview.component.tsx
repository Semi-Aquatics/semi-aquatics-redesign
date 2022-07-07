import styles from './ProductPreview.module.scss'
import Link from 'next/link'

interface ProductPreviewProps {
    image: string,
    title: string,
    price: string,
    id: string,
    isSoldOut: boolean,
    noPrice: boolean | undefined
}

const ProductPreview:React.FC<ProductPreviewProps> = ({image, title, price, id, noPrice, isSoldOut}) => {
    return (
        <Link href={`drop/${id}`}>
            <div className={styles.productPreviewContainer}>
                {
                    isSoldOut &&
                    <div className={styles.soldOut}>
                        <h3>Sold Out</h3>
                    </div>
                }
                <img src={image} alt={title}/>
                <h3 className={styles.cardTitle}>{title}</h3>
                { noPrice && <p className={styles.cardPrice}>${price}</p> }
            </div>
        </Link>
    );
};

export default ProductPreview;
