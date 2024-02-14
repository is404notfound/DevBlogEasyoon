'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
import ProfileImage from 'public/static/images/my-profile.png'
import { useTranslation } from 'react-i18next';
import Dashboard from './dashboard/page'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const { t } = useTranslation();

  return (
    <Dashboard />
  )
}
