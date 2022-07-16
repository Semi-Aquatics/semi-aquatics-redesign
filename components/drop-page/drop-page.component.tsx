import styles from './DropPage.module.scss'
import ProductPreview from '../product-preview/product-preview.component';

interface DropPageProps {
    products: any,
    dropName: string
}

const DropPage:React.FC <DropPageProps> = ({products, dropName}) => {
    return (
        <div className={styles.dropPageContainer}>
            <h1 className={styles.dropTitle}>{dropName}</h1>
            <div className={styles.productsContainer}>
              {
                products.edges.map((product: any) =>
                  <ProductPreview
                  key={product.node.title}
                  image={product.node.images.edges[0].node.transformedSrc}
                  title={product.node.title}
                  price={product.node.variants.edges[0].node.priceV2.amount}
                    isSoldOut={!product.node.availableForSale}
                  id={product.node.id}
                  noPrice={false}/>
                  )
                }
              </div>
        </div>
    );
};

export default DropPage;
