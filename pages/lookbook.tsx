import withLayout from '../hocs/withLayout';
import LookbookPage from "../components/lookbook-page/lookbook-page.component";

const Lookbook = () => {

    return (
        <div>
           <LookbookPage/>
        </div>
    );
};

export default withLayout(Lookbook);