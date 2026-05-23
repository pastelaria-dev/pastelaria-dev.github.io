import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import LocaleManager from '@site/src/components/LocaleManager';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TrailCopilotMark from '@site/src/components/TrailCopilotMark';
import {getLocaleContent} from '@site/src/data/siteContent';
import styles from './index.module.css';

function HomepageHeader({content}) {
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <div className={styles.brandMark}>
            <img
              className={styles.brandLogo}
              src="/img/logo.png"
              alt="Pastelaria.dev capybara logo"
            />
            <Heading as="h1" className={styles.heroTitle}>
              {content.title}
            </Heading>
          </div>
          <p className={styles.heroSubtitle}>{content.subtitle}</p>
          <p className={styles.heroDescription}>{content.body}</p>
          <div className={styles.actions}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryAction)}
              to="/trail">
              {content.primaryCta}
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryAction)}
              href="mailto:w@pastelaria.dev">
              {content.secondaryCta}
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.signalCard}>
            <p className={styles.signalLabel}>{content.featuredLabel}</p>
            <TrailCopilotMark className={styles.productTitleMark} compact />
            <Heading as="h2" className={styles.srOnly}>
              {content.featuredTitle}
            </Heading>
            <p className={styles.signalLead}>{content.featuredLead}</p>
            <p className={styles.signalBody}>{content.featuredBody}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function StudioIntro({content}) {
  return (
    <section className={styles.socialProof}>
      <div className={clsx('container', styles.socialProofInner)}>
        <p className={styles.socialProofLabel}>{content.studioLabel}</p>
        <p className={styles.socialProofText}>{content.studioBody}</p>
      </div>
    </section>
  );
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const content = getLocaleContent(i18n.currentLocale).home;

  return (
    <Layout title={content.title} description={content.description}>
      <LocaleManager />
      <HomepageHeader content={content} />
      <main>
        <StudioIntro content={content} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
