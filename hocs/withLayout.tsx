import { ComponentType } from 'react';
import Layout from '../components/layout/layout.component';

function withLayout<T>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithLayout(props: T) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}

export default withLayout;
