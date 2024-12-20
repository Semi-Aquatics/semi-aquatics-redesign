import Cms from '../cms';
import ArtistsPage from '../components/artists-page/artists-page.component';
import withLayout from '../hocs/withLayout';

// @ts-ignore
const Artist: React.FC = ({artists}) => {
  return (
    <ArtistsPage artists={artists}/>
  )
}

export async function getServerSideProps() {
  let artists = await new Cms().getArtists();

  return {
      props: {
        artists: artists
      },
    };
  }

export default withLayout(Artist);

