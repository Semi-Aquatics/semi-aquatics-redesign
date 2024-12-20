import styles from './ArtistsPage.module.scss'
import ArtistCard from '../artist-card/artist-card.component'

interface ArtistsPageProps {
  artists: any[]
}

const ArtistsPage:React.FC <ArtistsPageProps> = ({ artists }) => {
  return (
    <div className={styles.artistsPageContainer}>
    <h1>Our Artists</h1>
    <div className={styles.topBorder}></div>
    {
      artists.map(artist =>
        <div >
        <ArtistCard artistName={artist.name} artworks={artist.artworks} key={artist.name} />
        </div>
      )
    }
    </div>
  )
};


export default ArtistsPage;
