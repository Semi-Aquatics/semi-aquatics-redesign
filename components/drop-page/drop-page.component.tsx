import styles from './DropPage.module.scss'
// Packages
import { useSelector } from 'react-redux';
import { useState } from 'react';

// Components
import ProductPreview from '../product-preview/product-preview.component';
import PasswordWall from '../password-wall/password-wall.component';
import CountdownTimer from '../countdown-timer/countdown-timer.component';

// Hooks
import { useIsTimeLeft } from '../../hooks/use-is-time-left'

interface DropPageProps {
    products: any,
    dropName: string
}

const DropPage:React.FC <DropPageProps> = ({products, dropName}) => {
  const passwordGuessed = useSelector((state: any) => state.user.passwordGuessed);
  const isTimeLeft = useIsTimeLeft();

  return (
    <div className={styles.dropPageContainer}>
      <div className={styles.gridder}>
        <h1 className={styles.dropTitle}>Spring 2023 Drop 1</h1>
      </div>
        {
          passwordGuessed === process.env.WEBSITE_LOCK_PASSWORD || !isTimeLeft ?
            <div className={styles.productsContainer}>
              {
                products.edges.map((product: any) =>
                  <ProductPreview
                  key={product.node.title}
                  image={product.node.images.edges[0].node.transformedSrc}
                  title={product.node.title}
                  isSoldOut={!product.node.availableForSale}
                  id={product.node.id}
                  isArchive={false}
                  isTimeLeft={isTimeLeft}
                  />
                )
              }
            </div>
        :
          <PasswordWall images={products.edges.map((product: any) => product.node.images.edges[0].node.transformedSrc)}/>
        }
    </div>
  );
};

export default DropPage;
