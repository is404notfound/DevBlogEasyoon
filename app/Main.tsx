'use client'

import { useTranslation } from 'react-i18next';
import CalendarPage from './calendar/page';

export default function Home({ posts }) {
  const { t } = useTranslation();

  return (
    <CalendarPage />
  )
}
