'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'
import LogoComponent from '@/components/LogoComponent'
import styled from 'styled-components'

const Header = () => {
  const { t } = useTranslation()
  return (
      <HeaderWrapper>
        <div className="pr-4">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="h-full flex items-center justify-between gap-4">
                <LogoComponent src={'/static/images/dog-logo.png'} />
                {/* {siteMetadata.headerTitle} */}
            </div>
          </Link>
        </div>
        <HeaderTextWrapper>
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden w-full font-extrabold text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title && `${t(link.title)}`}
              </Link>
            ))}
          <MobileNav />
          <LanguageSelector />
        </HeaderTextWrapper>
      </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  height: 72px;
  background-color: rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 49;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  white-space: nowrap;

  a:hover {
    border-bottom: 4px solid var(--Color-Retro-Pink-05);
    transition: border-bottom 0.5s;
  }
`;