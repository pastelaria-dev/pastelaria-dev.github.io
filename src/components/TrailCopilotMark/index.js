import clsx from 'clsx';
import styles from './styles.module.css';

function TrailIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 76 54"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 42.5L19.7 25.8C21.1 24.1 23.8 24.2 25.1 26L31.4 34.6C32.9 36.6 36 36.6 37.5 34.6L49.7 17.8C51 16.1 53.6 16.1 54.9 17.8L70 38.4C72.1 41.3 70 45.5 66.4 45.5H11C7.4 45.5 5.3 41.3 7.4 38.4Z"
        fill="currentColor"
      />
      <path
        d="M38.2 16.7L44.7 8.3C46 6.7 48.5 6.7 49.8 8.3L57.5 18.2C59.1 20.2 57.7 23.2 55.1 23.2H32.9C30.4 23.2 28.9 20.3 30.5 18.3L36.1 11.4C36.7 10.7 37.8 10.7 38.3 11.4L40 13.5C40.5 14.2 40.6 15.6 39.9 16.2L38.2 16.7Z"
        fill="currentColor"
        opacity="0.82"
      />
      <circle cx="17.5" cy="19.5" r="4.5" fill="currentColor" opacity="0.82" />
    </svg>
  );
}

export default function TrailCopilotMark({className, compact = false}) {
  return (
    <div className={clsx(styles.mark, compact && styles.compact, className)}>
      <TrailIcon />
      <div className={styles.textBlock}>
        <span className={styles.title}>Trail Copilot</span>
      </div>
    </div>
  );
}
