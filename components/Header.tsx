'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'
import LogoComponent from '@/components/LogoComponent'
import { useTheme } from 'next-themes'
import styled from 'styled-components'

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col justify-between">
      <HeaderWrapper>
        <div className="pr-4">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="h-full flex items-center justify-between">
              <div>
                <LogoComponent src={'./static/images/dog-logo.png'} />
              </div>
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
    </div>
  )
}

export default Header

const HeaderWrapper = styled.header`
  height: 72px;
  background-color: rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 999;
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
`;