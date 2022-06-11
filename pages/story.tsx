import withLayout from '../hocs/withLayout';
import StoryPage from "../components/lookbook-page/lookbook-page.component";

const Story = () => {

  return (
    <div>
      <StoryPage />
    </div>
  );
};

export default withLayout(Story);
