import EmailForm from '../email-form/email-form.component';
import styles from './StoryPage.module.scss';

const StoryPage: React.FC = () => (
  <div className={styles.storyPageContainer}>
    <h1 className={styles.storyTitle}>Sustainable fashion for a planet in deep waters</h1>

    <div className={styles.textContainer}>
      <p>Millions of years ago, a fish got the great idea to develop its fleshy fins into limbs. Suddenly, our distant ancestor could walk on this new cool place called “land.”</p>
      <p>- 375 million years later, we've become A LOT better at having legs and arms. But we've also become A LOT worse at thinking about the oceans we came from…</p>
      <p className={styles.question} >Why are we talking about prehistoric leg-fish-thingies?</p>
      <p>Because water gave us life and allowed us to evolve from tiny gooey aquatic organisms into modern human beings. So isn't it time we started giving back to the oceans we owe literally EVERYTHING to? </p>
      <p className={styles.quote} >At Semi Aquatics, our mission is to inspire a sustainable lifestyle that would make our amphibious ancestors proud!</p>
      <p className={styles.question} >Imagine if we could Reverse Evolution™</p>
      <p>Well, that didn't come out right… But imagine if we could reverse the negative environmental impact of human evolution. If we could return to the way our planet was when our semi aquatic ancestors first crawled on land. And let nature return to how it was before we started spoiling and polluting living conditions in our oceans.</p>
      <p className={styles.question} >Evolution stripped us naked!</p>
      <p>Evolution quite literally took all that warm, cozy fur we used to be wrapped in. As a result humans had to produce our own “fur.” However, the way we have been manufacturing clothing has become one of most destructive industries in history. It pollutes our precious water with dyes and micro-particles, while cotton farming has caused us to clear forests on land.</p>
      <p className={styles.question} >Your Evolution Reversing Impact</p>
      <p>Clothing looks great on you, but horrible in the oceans. That's why we carefully source sustainable fabrics to craft hoodies, crewneck sweatshirts, sweatpants, shorts, and T-shirts made to be WORN over and over. By reversing your environmental impact and destructive consumer behaviour, you help allow the oceans to restore to the cradle of life they once were.</p>
      <p className={styles.question} >How does it work?</p>
      <p>Shopping for new clothing everyday is causing the fashion-related environmental disaster. Shopping the right day, is part of the solution. That’s why our collections are produced in limited numbers and only available on selected dates each month until they sell out. As a result, you receive high quality, sleek, minimal and timeless wardrobe stables. — And our planet gets a chance to recover without tonnes of apparel being dumped into landfills, rivers and oceans.</p>
    </div>
    <h2 className={styles.storyTitle}>To join our cause, sign up with your email to get notified when our next collection become available:</h2>
    <div className={styles.emailFormContainer}>
      <EmailForm isSidebar={false} />
    </div>

  </div>
);

export default StoryPage;
