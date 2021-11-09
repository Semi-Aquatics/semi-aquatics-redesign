import { useState } from 'react';
import ArtistCard from '../artist-card/artist-card.component';
import styles from './ArtistsPage.module.scss'

interface ArtistsPageProps {
    artists: any[]
}

const ArtistsPage:React.FC <ArtistsPageProps> = ({artists}) => {
    return (
        <div className={styles.artistsPageContainer}>
            <h1>Artists</h1>
            <div className={styles.allCards}>
                {
                    artists.map((artist:any) => 
                        <ArtistCard 
                            key={artist.id}
                            artistImage={artist.image}
                            artistName={artist.name}
                            artistContent={artist.content}
                        />
                    )
                }
            </div>
        </div>
    )
};


export default ArtistsPage;