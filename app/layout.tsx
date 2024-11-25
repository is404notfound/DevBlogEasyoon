'use client'

import 'styles/tailwind.css'
import 'styles/styles.css'
import 'pliny/search/algolia.css'
import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import '../i18n';
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
// import CanvasCat from '@/components/CanvasCat';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import PopupWrapper from '@/components/PopupWrapper'
import SearchWrapper from '@/components/search/SearchWrapper'
import { useStyledComponentsRegistry } from "../lib/StyledComponentsRegistry";

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})


// META DATA
const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { StyledComponentsRegistry, getStyleTags } = useStyledComponentsRegistry();
  const [styleTags, setStyleTags] = useState<string>('');

  useEffect(() => {
    const initialStyleTags = getStyleTags();
    
    if (!initialStyleTags) return;

    setStyleTags(initialStyleTags);

  }, [getStyleTags]);

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="stylesheet" type="text/css" href="../css/styles.css" />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6978995302170972" crossOrigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-6978995302170972"></meta>
      <meta name="google-site-verification" content="yRvR1PpfIXBPplOYqxtKFy9exK_FuOsG8mMEDQYeRrs" />
      <meta name="google-site-verification" content="5l483OR37tc7--oH3yCgu74KMqTq7xeyirlmFxy0s4I" />
      <body className="antialiased dark:bg-gray-800 dark:text-pink-500 light:bg-pink light:text-gray-100" >
        <div dangerouslySetInnerHTML={{ __html: styleTags }} />
        <RecoilRoot>
          <StyledComponentsRegistry>
            <PopupWrapper />
            <ThemeProviders>
              <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
              <ContentContainer ref={containerRef}>
                <Header />
                <SectionContainer>
                  <SearchWrapper />
                  <div className="flex flex-col justify-between font-PretendardVariable">
                    <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                      <main className="mb-auto">
                        {children}
                      </main>
                    </SearchProvider>
                    <Footer />
                  </div>
                </SectionContainer>
                {/* <CanvasCat /> */}
              </ContentContainer>
            </ThemeProviders>
          </StyledComponentsRegistry>
        </RecoilRoot>
      </body>
    </html>
  )
}
