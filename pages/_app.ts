import '../styles/globals.css'
import App from 'next/app';
// import services from '../services';
// import isServer from 'detect-node';
import withRedux from '../hocs/withRedux';

class MyApp extends App {
  public static async getInitialProps() {
    // const { req, res, store } = ctx;
    // const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const pageProps =  {};

    // if (isServer) 
    // await store.dispatch(services.checkout.get(req, res));

    return { pageProps };
  }
}

export default withRedux(MyApp);
