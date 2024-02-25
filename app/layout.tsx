'use client'

import 'css/tailwind.css'
import 'css/styles.css'
import 'pliny/search/algolia.css'
import { Space_Grotesk, Tsukimi_Rounded } from 'next/font/google'
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
import { useScroll, useSpring,animated } from 'react-spring'
import styled from 'styled-components';
import CanvasCat from '@/components/CanvasCat';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

//Css initial styles
const INITIAL_BAR_CONTAINER_STYLE = {
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'flex-end',
  'justify-content': 'space-between',
  'height': '180%',
  'position': 'absolute',
  'top': 0,
  'left': 0,
  'right': 0,
  'bottom': 0,
  'z-index': 1,
} as const

const INITIAL_BAR_STYLE = {
  'height': '3vh',
  'opacity': 0.5,
  'background-color': 'gray',
  'box-shadow': '0 0 10px 5px #f472b6',
  'z-index': 1,
} as const;

const INITIAL_INVERTED_BAR_CONTAINER_STYLE = {
  'display': 'flex',
  'flex-direction': 'column',
  'justify-content': 'space-between',
  'align-items': 'flex-start',
  'position': 'absolute',
  'height': '180%',
  'top': 0,
  'left': 0,
  'right': 0,
  'bottom': 0,
  'z-index': 1,
} as const;

const INITIAL_INVERTED_BAR_STYLE = {
  'height': '3vh',
  'opacity': 0.5,
  'background-color': 'gray',
  'box-shadow': '0 0 10px 5px #f472b6',
  'z-index': 1,
} as const;

const BarContainer = styled.div(INITIAL_BAR_CONTAINER_STYLE as any);
const Bar = styled(animated.div)(INITIAL_BAR_STYLE);
const InvertedBarContainer = styled.div(INITIAL_INVERTED_BAR_CONTAINER_STYLE as any);
const InvertedBar = styled(animated.div)(INITIAL_INVERTED_BAR_STYLE);

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
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
  const X_LINES = 80;
  const INITIAL_HEIGHT = 2000;
  const INITIAL_WIDTH = 100;

  const calculateBarWidth = (i, scrollP) => {
    const percentilePosition = (i + 1) / X_LINES;
    const amplitude = 20; // 조절 가능한 진폭 값
    const frequency = 1.5; // 조절 가능한 주파수 값
    const rawWidth = INITIAL_WIDTH / 4 + amplitude * Math.cos(2 * Math.PI * frequency * (percentilePosition - scrollP));
    return Math.abs(rawWidth)
  };

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      const percentage = scrollYProgress * 100;
      const percentilePosition = (percentage as number).toFixed(2) as unknown as number;
      const newWidth = INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - percentage) * Math.PI) / 1.5) ** 32;
      setResultWidth(newWidth);

      if (percentage > 0.7) {
        textApi.start({ y: '0' });
      } else {
        textApi.start({ y: '100%' });
      }
    },
    default: {
      immediate: true,
    },
  });
  const [textStyles, textApi] = useSpring(() => ({y: '100%',}));
  const [resultWidth, setResultWidth] = useState(INITIAL_WIDTH);
  const [resultHeight, setResultHeight] = useState(INITIAL_HEIGHT);
  const [useMovingBar, setUseMovingBar] = useState(false);

  // reactive style states
  const [barContainerStyle, setBarContainerStyle] = useState(INITIAL_BAR_CONTAINER_STYLE as any);
  const [invertedBarContainerStyle, setInvertedBarContainerStyle] = useState(INITIAL_INVERTED_BAR_CONTAINER_STYLE as any);

  // moving bar style
  useEffect(() => {
    setBarContainerStyle({
        ...INITIAL_BAR_CONTAINER_STYLE,
        height: `${resultHeight}px`,
    });
    setInvertedBarContainerStyle({
        ...INITIAL_INVERTED_BAR_CONTAINER_STYLE,
        height: `${resultHeight}px`,
    });
  }, [resultHeight]);

  useEffect(() => {
    if (resultHeight === window.innerHeight) return;
    window.addEventListener('scroll', ()=> window.scrollY === 0 && setResultHeight(window.innerHeight));

    return () => {
      window.removeEventListener('scroll',()=> window.scrollY === 0 && setResultHeight(window.innerHeight));
    }
  }, [resultHeight]);

  // set is using moving bar
  useEffect(() => {
    const handleResize = () => window.innerWidth > 1280 ? setUseMovingBar(true) : setUseMovingBar(false);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  // make moving bar
  useEffect(() => {
    if (!useMovingBar) return;
    
    function getWindowSize () {
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const percentage = (window.scrollY / (totalHeight - viewportHeight)) * 100;
      const percentilePosition = percentage;
      const newWidth = calculateBarWidth(0, percentilePosition);
  
      setResultHeight(totalHeight);
      setResultWidth(newWidth);

      return {percentage};
    }
  
    const handleScroll = () => {
      const {percentage} = getWindowSize();
  
      if (percentage > 0.7) {
        textApi.start({ y: '0' });
      } else {
        textApi.start({ y: '100%' });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', ()=> getWindowSize());
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', ()=> getWindowSize());
    };
  }, [useMovingBar, textApi]);
  
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
        {/* <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" /> */}
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="stylesheet" type="text/css" href="../css/styles.css" />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </Head>
      <body className="bg-white text-black antialiased dark:bg-gray-800 dark:text-pink-400" style={{ textShadow: '0 0 30px rgba(255, 0, 255, 0.5)' }}>
      
        <ThemeProviders>
            <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
              <ContentContainer ref={containerRef}>
                <SectionContainer>
                  <div className="flex h-screen flex-col justify-between font-DOSMyungjo">
                    <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                      <Header />
                      <RecoilRoot>
                       <main className="mb-auto">
                        {children}
                        </main>
                      </RecoilRoot>
                    </SearchProvider>
                    <Footer />
                  </div>
                </SectionContainer>

              { useMovingBar && (
                <>
                  <BarContainer style={barContainerStyle}>
                  {Array.from({ length: X_LINES }).map((_, i) => (
                    <Bar key={i} style={{
                      width: scrollYProgress.to(scrollP => {
                      const percentilePosition = (i + 1) / X_LINES
                      return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - resultWidth) * Math.PI) / 1.5) ** 32
                    }),}} />
                  ))}
                </BarContainer>
                <InvertedBarContainer style={invertedBarContainerStyle}>
                  {Array.from({ length: X_LINES }).map((_, i) => (
                    <InvertedBar key={i} style={{ 
                      width: scrollYProgress.to(scrollP => {
                        const percentilePosition = (i + 1) / X_LINES
                        return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - resultWidth) * Math.PI) / 1.5) ** 32
                      })
                      }} />
                  ))}
                </InvertedBarContainer>
              </>
            )}
            <CanvasCat />
            </ContentContainer>
          </ThemeProviders>
      </body>
    </html>
  )
}
