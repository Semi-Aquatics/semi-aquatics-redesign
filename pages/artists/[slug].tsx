import Cms from '../../cms';
import withLayout from '../../hocs/withLayout';
import { generateSlug } from '../../utils/generate-slug';
import { ArtistsT, ArtistT } from '../../types';
import ArtistsPage from '../../components/artists-page/artists-page.component';

interface PropsT {
  sidebarArtists: ArtistsT;
  selectedArtist: ArtistT;
}

// @ts-ignore
const Artist: React.FC<PropsT> = ({ selectedArtist, sidebarArtists }) => {
  return <ArtistsPage selectedArtist={selectedArtist} artists={sidebarArtists} />;
};

export async function getServerSideProps(context: { params: { slug: string } }) {
  const cms = new Cms();
  const { slug } = context.params;

  const artists: ArtistsT = await cms.getArtists();

  const artistsWithSlugs = artists.map((artist) => ({
    ...artist,
    slug: generateSlug(artist.name),
  }));

  const selectedArtist = artistsWithSlugs.find((artist) => artist.slug === slug.toLowerCase());
  
  if (!selectedArtist) {
    return {
      redirect: {
        destination: '/artists',
        permanent: false,
      },
    };
  }

  return {
    props: {
      selectedArtist,
      sidebarArtists: artistsWithSlugs,
    },
  };
}

export default withLayout(Artist);
