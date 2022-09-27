import { useState } from 'react';
import styles from './ArtistsPage.module.scss'
import ArtistCard from '../artist-card/artist-card.component'
import { artists } from './artists'

interface ArtistsPageProps {
    artists: any[]
}



const ArtistsPage:React.FC <ArtistsPageProps> = () => {
    return (
        <div className={styles.artistsPageContainer}>
            <h1>Our Artists</h1>
            <div className={styles.topBorder}></div>
            {
          artists.sort((artistA, artistB) => artistA.name > artistB.name ? 1 : -1).map(artist =>
                <div >
                  <ArtistCard artistName={artist.name} artworks={artist.artwork} key={artist.name} />
                </div>
                )
            }
        </div>
    )
};


export default ArtistsPage;
