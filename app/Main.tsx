'use client'

import { useTranslation } from 'react-i18next';
import Dashboard from './dashboard/page'

export default function Home({ posts }) {
  const { t } = useTranslation();

  return (
    <Dashboard />
  )
}
