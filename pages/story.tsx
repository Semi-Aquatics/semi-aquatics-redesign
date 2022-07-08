import withLayout from '../hocs/withLayout';
import StoryPage from "../components/story-page/story-page.component";

const Story = () => {

  return (
    <div>
      <StoryPage />
    </div>
  );
};

export default withLayout(Story);
