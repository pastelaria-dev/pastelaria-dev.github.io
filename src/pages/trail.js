import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import LocaleManager from '@site/src/components/LocaleManager';
import TrailCopilotMark from '@site/src/components/TrailCopilotMark';
import {getLocaleContent} from '@site/src/data/siteContent';
import styles from './trail.module.css';

export default function TrailPage() {
  const {i18n} = useDocusaurusContext();
  const content = getLocaleContent(i18n.currentLocale).trail;

  return (
    <Layout title={content.title} description={content.description}>
      <LocaleManager />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={clsx('container', styles.heroGrid)}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>{content.eyebrow}</p>
              <TrailCopilotMark className={styles.heroMark} />
              <Heading as="h1" className={styles.srOnly}>
                {content.title}
              </Heading>
              <p className={styles.subtitle}>{content.subtitle}</p>
              <p className={styles.description}>{content.body}</p>
              <div className={styles.actions}>
                <Link
                  className={clsx('button button--primary button--lg', styles.primaryAction)}
                  href="mailto:w@pastelaria.dev?subject=Trail%20early%20access">
                  {content.primaryCta}
                </Link>
              </div>
            </div>

            <div className={styles.signalPanel}>
              <div className={styles.signalCard}>
                <p className={styles.signalLabel}>{content.problemLabel}</p>
                <Heading as="h2" className={styles.signalTitle}>
                  {content.problemTitle}
                </Heading>
                <ul className={styles.problemList}>
                  {content.problems.map((problem) => (
                    <li key={problem}>{problem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx('container', styles.sectionGrid)}>
            <div>
              <p className={styles.sectionLabel}>{content.overviewLabel}</p>
              <Heading as="h2" className={styles.sectionTitle}>
                {content.overviewTitle}
              </Heading>
            </div>
            <div className={styles.sectionBody}>
              <p>{content.overviewBody}</p>
              <div className={styles.platformPills}>
                {content.platforms.map((platform) => (
                  <span key={platform} className={styles.platformPill}>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.headingBlock}>
              <p className={styles.sectionLabel}>{content.helpLabel}</p>
              <Heading as="h2" className={styles.sectionTitle}>
                {content.helpTitle}
              </Heading>
            </div>
            <div className={styles.cards}>
              {content.pillars.map((pillar) => (
                <article key={pillar.title} className={styles.card}>
                  <Heading as="h3" className={styles.cardTitle}>
                    {pillar.title}
                  </Heading>
                  <p className={styles.cardDescription}>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx('container', styles.audienceBlock)}>
            <div>
              <p className={styles.sectionLabel}>{content.audienceLabel}</p>
              <Heading as="h2" className={styles.sectionTitle}>
                {content.audienceTitle}
              </Heading>
            </div>
            <ul className={styles.audienceList}>
              {content.audiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
