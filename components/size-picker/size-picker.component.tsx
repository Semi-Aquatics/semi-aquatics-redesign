import { Dispatch, SetStateAction } from 'react';
import styles from './SizePicker.module.scss';

interface SizePickerProps {
    chosenVariant: string,
    setChosenVariant: Dispatch<SetStateAction<any>>,
    variants: any
}
const SizePicker:React.FC <SizePickerProps> = ({variants, chosenVariant, setChosenVariant}) => {
    return (
        <div className={styles.sizePickerContainer}>
            {
                variants.map((variant: any) =>
                    <div
                    className={chosenVariant == variant ?
                                styles.sizeSelected :
                                variant.node.availableForSale ? styles.size : styles.sizeUnavailable}
                    // onClick={() => variant.node.availableForSale ? setChosenVariant(variant) : ''}
                    onClick={() => setChosenVariant(variant)}
                    key={variant.node.title}>
                        {
                            variant.node.title
                        }
                    </div>
                    )
            }
        </div>
    );
};

export default SizePicker;
