import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Upload_and_edit from '../../../static/videos/Upload_and_edit.mp4'
import Save_And_Export from '../../../static/videos/Save_and_Export.mp4'
import Component_from_Scratch from '../../../static/videos/Component_from_Scratch.mp4'
import UI_Whiteboard from '../../../static/videos/UI_Whiteboard.mp4'


const FeatureList = [
  {
    title: 'Import Components for Development With Live Rendering',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        AthenaJS simplifies React component editing by allowing users to import them from a parent directory.
      </>
    ),
    isEven: false,
    mediaPath: Upload_and_edit
  },
  {
    title: 'Create New Components Using The Workshop',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In addition to enabling users to import existing React components, AthenaJS also offers a Workshop section within its UI that empowers users to create completely new components from scratch.
      </>
    ),
    isEven: true,
    mediaPath: Component_from_Scratch
  },
  {
    title: 'Build UI Screenshots from Saved Component Library',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With AthenaJS, software engineers can save their customized components to a dedicated library, which can be easily accessed and reused for future projects. Additionally, these saved components can be used to create mock UI images, providing developers with a powerful tool for prototyping and testing their applications.
      </>
    ),
    isEven: false,
    mediaPath: UI_Whiteboard
  },
  {
    title: 'Easily Export Created/Updated Components back to Project',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A key feature of AthenaJS is its ability to enable users to easily export any of their saved components, allowing for seamless integration with other applications and projects. 
      </>
    ),
    isEven: true,
    mediaPath: Save_And_Export
  },
];

function Feature({Svg, title, description, isEven, mediaPath}) {
  const parentFlexClassName = isEven ? styles.parentFlexEven : styles.parentFlexOdd;
  return (
    <div className = {`${styles.parentFlex} ${parentFlexClassName}`}>
      <div className={styles.flexDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.flexMedia}>
        <video autoPlay loop muted playsInline className = {styles.videoPlayer} width="640" height="360">
          <source src={mediaPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.containerElement}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
