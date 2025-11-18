import type { Metadata } from 'next';

export const siteConfig = {
  title: 'Isomorphic - React Next.js Admin Dashboard',
  description: 'Isomorphic the ultimate React Next.js Admin Dashboard Template',
  logo: '/logo.svg',
  icon: '/favicon.ico',
  mode: 'light', // Default theme mode
};

export const metaObject = (
  title?: string,
  openGraph?: Metadata['openGraph'],
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Isomorphic` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Isomorphic` : siteConfig.title,
      description,
      url: 'https://isomorphic-furyroad.vercel.app',
      siteName: 'Isomorphic',
      images: {
        url: 'https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  };
};