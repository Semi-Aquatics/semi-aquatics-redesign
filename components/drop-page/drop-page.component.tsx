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
                // @ts-ignore
                products.edges.map(product => 
                  <ProductPreview 
                  image={product.node.images.edges[0].node.transformedSrc} 
                  title={product.node.title} 
                  price={product.node.variants.edges[0].node.priceV2.amount} 
                  id={product.node.id}/>
                  )
                }
              </div>
        </div>
                );
};

export default DropPage;