import React, { useState } from 'react';
import EmailForm from '../email-form/email-form.component';
import styles from './StoryPage.module.scss';

// images
// @ts-ignore
import storyPage1 from '../../public/story-page-1.png';
// @ts-ignore
import storyPage2 from '../../public/story-page-3.png';
// @ts-ignore
import storyPage3 from '../../public/story-page-4.png';

const slideOne = <React.Fragment>
  <div className={styles.imageSlide}>
    <div className={styles.itemContainer}>
      <h1 className={styles.storyTitle}>Sustainable fashion for a planet in deep waters</h1>
    </div>
    <div className={styles.itemContainer}>
      <img src={storyPage1} alt="semi-aquatics" />
    </div>
  </div>
</React.Fragment>

const slideTwo = <React.Fragment>
  <div className={styles.textSlide}>
    <p>Millions of years ago, a fish got the great idea to develop its fleshy fins into limbs. Suddenly, our distant ancestor could walk on this new cool place called “land.”</p>
    <br></br>
    <p>- 375 million years later, we've become A LOT better at having legs and arms. But we've also become A LOT worse at thinking about the oceans we came from…</p>
  </div>
</React.Fragment>
const slideThree = <React.Fragment>
  <div className={styles.textSlide}>
    <div className={styles.itemContainer}>
      <h2>Why are we talking about prehistoric leg-fish-thingies?</h2>
      <p>Because water gave us life and allowed us to evolve from tiny gooey aquatic organisms into modern human beings. So isn't it time we started giving back to the oceans we owe literally EVERYTHING to? </p>
      <p>At Semi Aquatics, our mission is to inspire a sustainable lifestyle that would make our amphibious ancestors proud!</p>
    </div>
  </div>
</React.Fragment>
const slideFour = <React.Fragment>
  <div className={styles.textSlide}>
    <h2 className={styles.bottomLeftText}>
      Imagine if we could Reverse Evolution™
    </h2>
  </div>
</React.Fragment>
const slideFive = <React.Fragment>
  <div className={styles.imageSlide}>
    <div className={styles.itemContainer}>
      <p>Well, that didn't come out right… But imagine if we could reverse the negative environmental impact of human evolution. </p>
      <p>If we could return to the way our planet was when our semi aquatic ancestors first crawled on land. And let nature return to how it was before we started spoiling and polluting living conditions in our oceans.</p>
    </div>
    <div className={styles.itemContainer}>
      <img src={storyPage2} alt="" />
    </div>
  </div>
</React.Fragment>
const slideSix = <React.Fragment>
  <div className={styles.imageSlide}>
    <div className={styles.itemContainer}>
      <h2>Evolution stripped us naked!</h2>
      <p>Evolution quite literally took all that warm, cozy fur we used to be wrapped in. As a result humans had to produce our own “fur.” </p>
      <p>However, the way we have been manufacturing clothing has become one of most destructive industries in history. It pollutes our precious water with dyes and micro-particles, while cotton farming has caused us to clear forests on land.</p>
    </div>
    <div className={styles.itemContainer}>
      <img src={storyPage3} alt="" />
    </div>
  </div>
</React.Fragment>
const slideSeven = <React.Fragment>
  <div className={styles.textSlide}>
    <div className={styles.itemContainer}>
      <h2>Your Evolution Reversing Impact</h2>
      <p>Clothing looks great on you, but horrible in the oceans. That's why we carefully source sustainable fabrics to craft hoodies, crewneck sweatshirts, sweatpants, shorts, and T-shirts made to be WORN over and over. By reversing your environmental impact and destructive consumer behaviour, you help allow the oceans to restore to the cradle of life they once were.</p>
    </div>
  </div>
</React.Fragment>
const slideEight = <React.Fragment>
  <div className={styles.textSlide}>
    <div className={styles.itemContainer}>
      <h2>How does it work?</h2>
      <p>Shopping for new clothing everyday is causing the fashion-related environmental disaster. Shopping the right day, is part of the solution. That’s why our collections are produced in limited numbers and only available on selected dates each month until they sell out. As a result, you receive high quality, sleek, minimal and timeless wardrobe stables. — And our planet gets a chance to recover without tonnes of apparel being dumped into landfills, rivers and oceans.</p>
    </div>
  </div>
</React.Fragment>
const slideNine = <React.Fragment>
  <div className={styles.textSlide}>
    <div className={styles.itemContainer}>
      <h2>To join our cause, sign up with your email to get notified when our next collection become available:</h2>
      <EmailForm isSidebar={false} />
    </div>
  </div>
</React.Fragment>


const StoryPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(slideOne);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const moveSlides = () => {
    const { pageYOffset, scrollY } = window

    console.log(pageYOffset, scrollY)
  }

  return (
    <div className={`${styles.storyPageContainer}`}  onScroll={() => moveSlides()} >
      <div className={styles.slideContainer}>
        {slideOne}
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer2}`}>
        {slideTwo}
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer3}`}>
        {slideThree}
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer4}`}>
        <div className={styles.bottomLeftText}>
          {slideFour}
        </div>
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer5}`}>
        {slideFive}
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer6}`}>
        {slideSix}
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer7}`}>
        {slideSeven}
      </div>
      <div className={`${styles.slideContainer} ${styles.slideContainer8}`}>
        {slideEight}
      </div>
      <div className={`${styles.slideContainer}`}>
        {slideNine}
      </div>
    </div>
  );
}

export default StoryPage;
