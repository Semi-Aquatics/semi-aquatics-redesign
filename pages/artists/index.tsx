import Cms from '../../cms';
import ArtistsPage from '../../components/artists-page/artists-page.component';
import withLayout from '../../hocs/withLayout';
import { generateSlug } from '../../utils/generate-slug';
import { ArtistsT, ArtistT } from '../../types';

interface PropsT {
  sidebarArtists: ArtistsT;
}

// @ts-ignore
const Artists: React.FC = ({ sidebarArtists }: PropsT) => {
  return <ArtistsPage artists={sidebarArtists} />;
};

export async function getServerSideProps() {
  const cms = new Cms();

  const artists: ArtistsT = await cms.getArtists();

  const artistsWithSlugs = artists.map((artist) => ({
    ...artist,
    slug: generateSlug(artist.name),
  }));

  return {
    props: {
      sidebarArtists: artistsWithSlugs,
    },
  };
}

export default withLayout(Artists);
