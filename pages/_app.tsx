import '../styles/globals.css'
import App, { AppProps } from 'next/app';
// import services from '../services';
// import isServer from 'detect-node';
import withRedux from '../hocs/withRedux';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { CookiesProvider } from 'react-cookie';

// @ts-ignore
const MyApp:React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default withRedux(MyApp);
