import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Qapla!',
    img: require('@site/static/img/grogu.jpg').default,
    description: (
      <>
        Jolan Tru, this is the way!
      </>
    ),
  },
  {
    title: 'Do IT!',
    description: 'This is how me do it!',
    videoUrl: 'https://www.youtube.com/embed/jEoM3qan9Gs', 
  },
  {
    title: 'I have spoken!',
    img: require('@site/static/img/kuiil.jpg').default,
    description: (
      <>
         Hello Docusaurus, good by Jekyll!
      </>
    ),
  },
];

// function Feature({Svg, img,  title, description}) {
function Feature({ Svg, img, title, description, videoUrl }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img && <img className={styles.featureSvg} role="img" src={img} />}
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {videoUrl && (
          <iframe
            className={styles.featureVideo}
            // width="560"
            // height="315"
            width="355"
            height="200"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// REV01: Wed 24 May 2023 18:00
// START: Wed 10 May 2023 05:30

