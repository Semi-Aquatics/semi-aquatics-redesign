import styles from './ProductPreview.module.scss'
import Link from 'next/link'

interface ProductPreviewProps {
    image: string,
    title: string,
    price: string,
    id: string,
    // noPrice: boolean | undefined
}

const ProductPreview:React.FC<ProductPreviewProps> = ({image, title, price, id, noPrice}) => {
    return (
        <Link href={`drop/${id}`}>
            <div className={styles.productPreviewContainer}>
                <img src={image} alt={title}/>
                <h3 className={styles.cardTitle}>{title}</h3>
                { noPrice && <p className={styles.cardPrice}>${price}</p> }
            </div>
        </Link>
    );
};

export default ProductPreview;
