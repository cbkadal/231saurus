import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Jolan Tru!',
    img: require('@site/static/img/romulan.jpg').default,
    description: (
      <>
        I tawt I taw a Romulan! --- Sheldon, TBBT(S1E13).
      </>
    ),
  },
  {
    title: 'This is the Way!',
    img: require('@site/static/img/grogu.jpg').default,
    description: (
      <>
        I'm a Mandalorian. Weapons are part of my religion -- Mando.
      </>
    ),
  },
  {
    title: 'I have spoken!',
    img: require('@site/static/img/kuiil.jpg').default,
    description: (
      <>
         Hello Docusaurus, good by Jekyll --- Qapla!
      </>
    ),
  },
];

function Feature({Svg, img,  title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img && <img className={styles.featureSvg} role="img" src={img} />}
        {Svg && <Svg className={styles.featureSvg} role="img" />}
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

// START: Wed 10 May 2023 05:30
