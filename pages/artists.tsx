import ArtistsPage from '../components/artists-page/artists-page.component';
import withLayout from '../hocs/withLayout';

// @ts-ignore
const Artist: React.FC = ({artists}) => {
  return (
    <ArtistsPage artists={artists}/>
  )
}

const baseUri = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://semi-aquatics-cms.onrender.com'

export async function getStaticProps(context: { query?: any; store?: any; }) {
  let artists = [];

  try {
    const res = await fetch(`${baseUri}/api/artists`);
    if (res.ok) {
      artists = await res.json();
    } else {
      console.error('Failed to fetch artists:', res.status, res.statusText);
    }
  } catch (error) {
    console.error('Error fetching artists:', error);
  }
  
  return {
      props: {
        artists: artists
      },
    };
  }

export default withLayout(Artist);

