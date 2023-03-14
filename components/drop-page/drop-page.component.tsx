import styles from './DropPage.module.scss'
import ProductPreview from '../product-preview/product-preview.component';
import PasswordWall from '../password-wall/password-wall.component';
import { useSelector } from 'react-redux';
import CountdownTimer from '../countdown-timer/countdown-timer.component';
import { useState } from 'react';

interface DropPageProps {
    products: any,
    dropName: string
}

const DropPage:React.FC <DropPageProps> = ({products, dropName}) => {
  const passwordGuessed = useSelector((state: any) => state.user.passwordGuessed);
  const DROP_DATE = new Date("2023/03/06 18:00:00 EST");
  const [isTimeLeft, setIsTimeLeft] = useState(true);

  return (
    <div className={styles.dropPageContainer}>
      <div className={styles.gridder}>
        <h1 className={styles.dropTitle}>Winter 2023 Drop 1</h1>
      </div>
      <div className={styles.countdownContainer}>
        <CountdownTimer dropDate={DROP_DATE} setIsTimeLeft={setIsTimeLeft}/>
      </div>
        {
          passwordGuessed === process.env.WEBSITE_LOCK_PASSWORD || !isTimeLeft || true ?
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
