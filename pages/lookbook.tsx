import { useState } from 'react'
import Layout from '../components/layout/layout.component';
import styles from '../styles/Lookbook.module.scss'

import Image from "../components/image/image.component";
import ImageSlider from "../components/image-slider/image-slider.component";
import withLayout from '../hocs/withLayout';


const LookbookPage = () => {

    return (
        <div>
           Layout
        </div>
    );
};

export default withLayout(LookbookPage);