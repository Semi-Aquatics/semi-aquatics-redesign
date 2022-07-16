import withLayout from '../hocs/withLayout';
import SizingPage from "../components/sizing-page/sizing-page.component";

const Sizing = () => {

  return (
    <div>
      <SizingPage />
    </div>
  );
};

export default withLayout(Sizing);
