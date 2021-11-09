import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import styles from './ArtistCard.module.scss'

interface ArtistCardProps {
    artistName: string,
    artistImage: string,
    artistContent: string
}

const ArtistCard:React.FC <ArtistCardProps> = ({artistName, artistImage, artistContent}) => {
    const ref = useRef();
    const [isFlipped, setIsFlipped] = useState(false);
    useOnClickOutside(ref, () => setIsFlipped(false));
    return (
        // @ts-ignore
        <div className={styles.placeHolderDiv} ref={ref}>
            <div className={`${styles.artistCardContainer}  ${isFlipped ? styles.flipped : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
                <div className={styles.artistCardFront}>
                    <img src={artistImage} alt={artistName}/>
                    <div className={styles.artistName}><span>{artistName}</span></div>  
                </div>
                <div className={styles.artistCardBack}>
                    <div className={styles.cardHeader}>
                        <img src={artistImage} alt={artistName}/>
                        <h2>{artistName}</h2>
                    </div>
                    <div className={styles.artistContent}>
                        <p>{artistContent}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ArtistCard;