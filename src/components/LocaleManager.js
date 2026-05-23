import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const STORAGE_KEY = 'preferred-locale';
const PERSIST_QUERY = 'persistLocale=true';
const DEFAULT_LOCALE = 'pt-BR';
const SUPPORTED_LOCALES = ['pt-BR', 'en-US'];

function getPreferredLocale() {
  if (typeof window === 'undefined') {
    return null;
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);

  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = window.navigator.language;

  if (browserLocale?.toLowerCase().startsWith('en')) {
    return 'en-US';
  }

  if (browserLocale?.toLowerCase().startsWith('pt')) {
    return 'pt-BR';
  }

  return null;
}

function withLocalePrefix(pathname, locale) {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;

  if (locale === DEFAULT_LOCALE) {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return `/${locale}/`;
  }

  return `/${locale}${normalizedPath}`;
}

export default function LocaleManager() {
  const {i18n} = useDocusaurusContext();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const url = new URL(window.location.href);

    if (url.searchParams.get('persistLocale') === 'true') {
      window.localStorage.setItem(STORAGE_KEY, i18n.currentLocale);
      url.searchParams.delete('persistLocale');
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
      return;
    }

    if (i18n.currentLocale !== DEFAULT_LOCALE) {
      return;
    }

    if (window.location.pathname.startsWith('/en-US/')) {
      return;
    }

    const preferredLocale = getPreferredLocale();

    if (!preferredLocale || preferredLocale === DEFAULT_LOCALE) {
      return;
    }

    const nextPath = withLocalePrefix(window.location.pathname, preferredLocale);
    const nextUrl = `${nextPath}${window.location.search}${window.location.hash}`;

    if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.location.replace(nextUrl);
    }
  }, [i18n.currentLocale]);

  return null;
}
