import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getLocaleContent} from '@site/src/data/siteContent';
import styles from './styles.module.css';

function Feature({eyebrow, title, description, cta}) {
  return (
    <article className={styles.featureCard}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading as="h3" className={styles.title}>
        {title}
      </Heading>
      <p className={styles.description}>{description}</p>
      {cta ? (
        <Link className={styles.inlineLink} to={cta.to}>
          {cta.label}
        </Link>
      ) : null}
    </article>
  );
}

export default function HomepageFeatures() {
  const {i18n} = useDocusaurusContext();
  const content = getLocaleContent(i18n.currentLocale).companyFeatures;

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.headingBlock}>
          <p className={styles.sectionLabel}>{content.sectionLabel}</p>
          <Heading as="h2" className={styles.sectionTitle}>
            {content.sectionTitle}
          </Heading>
        </div>
        <div className={styles.grid}>
          {content.items.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
