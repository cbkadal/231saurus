import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ken Arok',
    // @site/static/img/C-neuman.jpg
    img: require('@site/static/img/C-neuman.jpg').default,
    description: (
      <>
         Ini baru lumayan, buat foya-foya, kalau di nirwana.
      </>
    ),
  },
  {
    title: 'Chevrolet',
    img: require('@site/static/img/docusaurus-social-card.jpg').default,
    description: (
      <>
       The Heartbeat of America is Today's Chevrolet 
      </>
    ),
  },
  {
    title: 'TJ Maxx',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Ttttttt... TJ Maxx.
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

