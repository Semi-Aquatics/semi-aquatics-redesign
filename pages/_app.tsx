import '../styles/globals.css'
import App, { AppProps } from 'next/app';
// import services from '../services';
// import isServer from 'detect-node';
import withRedux from '../hocs/withRedux';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { CookiesProvider } from 'react-cookie';
import { store, persistor } from '../redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// @ts-ignore
const MyApp:React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ApolloProvider client={client}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default withRedux(MyApp);
