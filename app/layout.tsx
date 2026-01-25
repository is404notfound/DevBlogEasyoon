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
import { RecoilRoot } from 'recoil';
import PopupWrapper from '@/components/PopupWrapper'
import SearchWrapper from '@/components/search/SearchWrapper'
import { useStyledComponentsRegistry } from "../lib/StyledComponentsRegistry";
import Script from 'next/script'

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

  useEffect(() => {
    // Add favicon and other head elements
    const linkAppleTouch = document.createElement('link');
    linkAppleTouch.rel = 'apple-touch-icon';
    linkAppleTouch.setAttribute('sizes', '76x76');
    linkAppleTouch.href = '/static/favicons/apple-touch-icon.png';
    document.head.appendChild(linkAppleTouch);

    const linkIcon32 = document.createElement('link');
    linkIcon32.rel = 'icon';
    linkIcon32.type = 'image/png';
    linkIcon32.setAttribute('sizes', '32x32');
    linkIcon32.href = '/static/favicons/favicon-32x32.png';
    document.head.appendChild(linkIcon32);

    const linkIcon16 = document.createElement('link');
    linkIcon16.rel = 'icon';
    linkIcon16.type = 'image/png';
    linkIcon16.setAttribute('sizes', '16x16');
    linkIcon16.href = '/static/favicons/favicon-16x16.png';
    document.head.appendChild(linkIcon16);

    const linkManifest = document.createElement('link');
    linkManifest.rel = 'manifest';
    linkManifest.href = '/static/favicons/site.webmanifest';
    document.head.appendChild(linkManifest);

    const linkMaskIcon = document.createElement('link');
    linkMaskIcon.rel = 'mask-icon';
    linkMaskIcon.href = '/static/favicons/safari-pinned-tab.svg';
    linkMaskIcon.setAttribute('color', '#5bbad5');
    document.head.appendChild(linkMaskIcon);

    const metaTileColor = document.createElement('meta');
    metaTileColor.name = 'msapplication-TileColor';
    metaTileColor.content = '#000000';
    document.head.appendChild(metaTileColor);

    const metaThemeLight = document.createElement('meta');
    metaThemeLight.name = 'theme-color';
    metaThemeLight.setAttribute('media', '(prefers-color-scheme: light)');
    metaThemeLight.content = '#fff';
    document.head.appendChild(metaThemeLight);

    const metaThemeDark = document.createElement('meta');
    metaThemeDark.name = 'theme-color';
    metaThemeDark.setAttribute('media', '(prefers-color-scheme: dark)');
    metaThemeDark.content = '#000';
    document.head.appendChild(metaThemeDark);

    const linkRSS = document.createElement('link');
    linkRSS.rel = 'alternate';
    linkRSS.type = 'application/rss+xml';
    linkRSS.href = '/feed.xml';
    document.head.appendChild(linkRSS);

    const linkFlowbite = document.createElement('link');
    linkFlowbite.href = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css';
    linkFlowbite.rel = 'stylesheet';
    document.head.appendChild(linkFlowbite);

    const metaAdsense = document.createElement('meta');
    metaAdsense.name = 'google-adsense-account';
    metaAdsense.content = 'ca-pub-6978995302170972';
    document.head.appendChild(metaAdsense);

    const metaVerification1 = document.createElement('meta');
    metaVerification1.name = 'google-site-verification';
    metaVerification1.content = 'yRvR1PpfIXBPplOYqxtKFy9exK_FuOsG8mMEDQYeRrs';
    document.head.appendChild(metaVerification1);

    const metaVerification2 = document.createElement('meta');
    metaVerification2.name = 'google-site-verification';
    metaVerification2.content = '5l483OR37tc7--oH3yCgu74KMqTq7xeyirlmFxy0s4I';
    document.head.appendChild(metaVerification2);

    const scriptApexcharts = document.createElement('script');
    scriptApexcharts.src = 'https://cdn.jsdelivr.net/npm/apexcharts';
    document.head.appendChild(scriptApexcharts);

    return () => {
      // Cleanup: remove elements if they exist
      const elements = [
        linkAppleTouch, linkIcon32, linkIcon16, linkManifest, linkMaskIcon,
        metaTileColor, metaThemeLight, metaThemeDark, linkRSS, linkFlowbite,
        metaAdsense, metaVerification1, metaVerification2, scriptApexcharts
      ];
      elements.forEach(element => {
        if (element.parentNode === document.head) {
          document.head.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6978995302170972" crossOrigin="anonymous"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LLG953S5XG"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LLG953S5XG');
      `}
      </Script>
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
