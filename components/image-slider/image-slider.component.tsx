import { useState } from 'react'
import styles from './ImageSlider.module.scss'
import Image from "../image/image.component";

interface ImageSliderProps {
    index: number,
    changeImage: (picNumber: number) => void
}

const ImageSlider: React.FC<ImageSliderProps> = ({index, changeImage}) => {
    return (
        <div className={styles.imageSliderContainer}>
            {
                [1,2,3,4].map(picNumber => 
                    <div key={picNumber} className={styles.individualPic} onClick={() => changeImage(picNumber)}>
                        <Image  src={`lookbook-pic-${picNumber}.JPG`} selected={index == picNumber}/>
                    </div>
                )
            }
        </div>
    );
};

export default ImageSlider;