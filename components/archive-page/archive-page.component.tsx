import styles from './ArchivePage.module.scss'
import ProductPreview from '../product-preview/product-preview.component';

interface ArchivePageProps {
    drops: any
}

const ArchivePage:React.FC <ArchivePageProps> = ({drops}) => {
  console
    return (
        <div className={styles.archivePageContainer}>
          <h1>Archive</h1>
            {
                drops.map((drop: any) =>
                    <div className={styles.dropContainer}>
                        <h2>{drop.title}</h2>
                        <div className={styles.archiveProductContainer}>
                            {
                                drop.products.edges.map((product: any) =>
                                  <ProductPreview
                                    image={product.node.images.edges[0] ? product.node.images.edges[0].node.transformedSrc : ''}
                                    title={product.node.title}
                                    price={product.node.variants.edges[0].node.priceV2.amount}
                                    id={product.node.id}
                                    isSoldOut={!product.node.availableForSale}
                                    isArchive={true}/>
                                  )
                            }
                         </div>
                    </div>
                )
            }
        </div>
          );
};

export default ArchivePage;
