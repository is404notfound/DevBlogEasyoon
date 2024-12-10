'use client'

import { useTranslation } from 'react-i18next';
import DashboardPage from './dashboard/page';

export default function Home({ posts }) {
  const { t } = useTranslation();

  return (
    <DashboardPage />
  )
}
