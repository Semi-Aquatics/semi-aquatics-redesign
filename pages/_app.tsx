import '../styles/globals.css'
import App, { AppProps } from 'next/app';
// import services from '../services';
// import isServer from 'detect-node';
import withRedux from '../hocs/withRedux';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

const MyApp:React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withRedux(MyApp);
