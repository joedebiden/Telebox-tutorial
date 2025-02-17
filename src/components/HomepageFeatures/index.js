import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';


const FeatureList = [
  {
    title: 'Scrape & Add with Ease',
    Svg: require('@site/static/img/telegram.svg').default,
    description: (
      <>
        Effortlessly scrape and add members with advanced automation and customizable settings. 
        Telebox simplifies the process so you can focus on growing your community.
      </>
    )
  },
  {
    title: 'Seamless & User-Friendly',
    Svg: require('@site/static/img/python.svg').default,
    description: (
      <>
        Designed for hassle-free installation and intuitive use, 
        Telebox gets you up and running in no time—no complex setup required.
      </>
    ),
  },
  {
    title:'Modern, Open-Source & Customizable',
    Svg: null,
    description: (
      <>
        Built for innovation—Telebox is open-source, highly customizable, 
        and ready for you to contribute, modify, and make it your own.
      </>
    )
  },
];

function Feature({Svg, title, description, colorMode}) {
  if (title === 'Modern, Open-Source & Customizable'){
    Svg = colorMode === 'dark'
      ? require('@site/static/img/Github_dark.svg').default
      : require('@site/static/img/Github_light.svg').default;
  }


  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} colorMode={colorMode} />
          ))}
        </div>
      </div>
    </section>
  );
}
