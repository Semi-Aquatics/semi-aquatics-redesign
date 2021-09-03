import styles from './ShowPage.module.scss'
import React, { useState } from 'react';
import SizePicker from "../size-picker/size-picker.component";
import NumberPicker from "../number-picker/number-picker.component";
import Button from "../button/button.component";
import ImageCarousel from '../image-carousel/image-carousel.component';

interface ShowPageProps {
    product: any
}

const ShowPage:React.FC<ShowPageProps> = ({product}) => {
    const [numberToAdd, setNumberToAdd] = useState(1);
    const description = product.node.descriptionHtml;
    const [selected, setSelected] = useState('');
    return (
        <div className={styles.showPageContainer}>
            <div className={styles.productDescription}>
                <h1>{product.node.title}</h1>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
            <ImageCarousel images={product.node.images.edges} altText={product.node.title}/>
            <div className={styles.productAddToCart}>
                <h2 className={styles.productPrice}>${product.node.variants.edges[0].node.priceV2.amount}</h2> 
                <SizePicker variants={product.node.variants.edges} chosenVariant={selected} setChosenVariant={setSelected}/>
                <NumberPicker soldOut={!product.node.availableForSale} number={numberToAdd} setNumber={setNumberToAdd}/>
                <Button soldOut={!product.node.availableForSale} isSelected={selected !== ''}>
                    {
                        product.node.availableForSale ?
                            "Add to cart"
                        :
                            "Sold out"
                    }
                </Button>
                
            </div>
             
        </div>
    );
};

export default ShowPage;

// reduce(function (res:any, current:any, index:any, array:any) {
//     return res.concat([current, current]);
// }, [])