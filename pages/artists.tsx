import ArtistsPage from '../components/artists-page/artists-page.component';
import withLayout from '../hocs/withLayout';

// @ts-ignore
const Artist: React.FC = ({artists}) => {
  return (
    <ArtistsPage artists={artists}/>
  )
}

export async function getStaticProps(context: { query?: any; store?: any; }) {
    const artists = [
        {
            name: 'Jon Taylor',
            image: 'https://i2.wp.com/djrobblog.com/wp-content/uploads/2019/11/D53E7600-A14D-4C15-9087-7D53B137547B.jpeg?fit=584%2C584&ssl=1',
            content: 'In 2016, Kaws and Uniqlo worked together to release a limited run of t-shirts featuring Kaws’ artwork. The shirts debuted in Uniqlo retail outlets worldwide. The first run was so popular that the company quickly produced a second collection to keep up with demand.  While many graffiti artist have successful t-shirt lines, few have been as instantly successful as Kaws has been. '
        },
        {
            name: 'Ben Aronov',
            image: 'https://www.off---white.com/BWStaticContent/53000/b88ffc2d-1e80-4ae7-b1a1-f64f043303fb_off-white-denim-fl-homepage-hero-03.jpg',
            content: 'Shepard Fairey is an innovative artist on several fronts. In the 80s, his “Andre The Giant” sticker became ubiquitous, even beyond the street art scene. In some ways, it even led to the “street team” promotion movement that became popular in the 90s. Later on in 2008, his portrait of Barack Obama became the unofficial logo for the POTUS’s campaign, and helped push street art into the forefront of American culture.            '
        },
        {
            name: 'Charly',
            image: 'https://www.off---white.com/BWStaticContent/53000/e7b54d95-1e04-48cc-b3fd-550781c7cb73_owad163f21jer0011001-1446.jpg',
            content: 'Fairey blended his artwork with fashion when he created his own streetwear brand, Obey. The brand’s logo has arguably become Fairey’s most recognizable work. Obey apparel is sold in malls and merchandisers all over the United States, and is available at affordable prices at stores like Urban Outfitters and Zumiez. Fairey has made street art available for the masses to purchase and wear, and he’s successfully turned young people onto the scene with every trip to the mall. '
        },
        {
            name: 'Ofir',
            image: 'https://cdn-images.farfetch-contents.com/16/86/85/97/16868597_34361617_1000.jpg?c=3',
            content: 'Stash’s version of “The Question” reimagined the familiar silhouette. His design utilized premium materials and unique blue and grey hues in combination with Reebok, Iverson, and Stash co-branding. The shoe was proof that when sneaker companies collaborate with artists, the results don’t have to scream “Look at me!” when they could “Kill Them Softly.” '
        },
        {
            name: 'David Sellam',
            image: 'https://www.off---white.com/BWStaticContent/53000/78321736-9de5-46dc-8f09-cbe6bf576ab7_ow-eyewear1.jpg',
            content: 'Angelo Gingerelli is a New Jersey native, stand-up comic, streetwear enthusiast, and avid hip-hop fan.  He has been writing for various publications since 2009 and currently contributes to Pop-Break.com, FifthRoundMovement.com and Rush Order Tees. Learn more about Angelo on his website and on Twitter @Mr5thRound.'
        }
    ]

    return {
        props: {
          artists: artists
        },
     };
  }

export default withLayout(Artist);

