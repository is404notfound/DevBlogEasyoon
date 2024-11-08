"use client";

import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { currentLastDate, currentMonth, currentYear, schedules } from "./schedules";
import dynamic from "next/dynamic";
//@ts-ignore
const Calendar = dynamic(() => import("@toast-ui/react-calendar"), { ssr: false });

const CalendarPage = () => {
  const { t } = useTranslation();
  const calendarRef = useRef(null);
  const theme = {
    common: {
      backgroundColor: 'transparent',
      border: '1px dotted #e5e5e5',
      dayName: {
        color: 'var(--Color-Grayscale-00)',
      },
      holiday: {
        color: 'var(--Color-Retro-Pink-06)',
      },
      saturday: {
        color: 'var(--Color-Retro-Blue-01)',
      },
    },
    month: {
      color: 'var(--Color-Grayscale-00)',
    }
  };
  const calendars = [{
    id: '1',
    name: 'Reservations',
    color: 'var(--Color-Grayscale-02)',
    backgroundColor: 'var(--Color-Grayscale-dim-black-50)',
    borderColor: 'var(--Color-Retro-Pink-05)',
  }, {
    id: '2',
    name: 'Conferences',
    color: 'var(--Color-Grayscale-07)',
    backgroundColor: 'var(--Color-Grayscale-dim-white-50)',
    borderColor: 'var(--Color-Retro-Blue-01)',
  }];

  return (
    <MainContainer>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('calendar.title')} | {currentYear}-{currentMonth}
          </h1>
        </div>
      </div>
      <Calendar
        //@ts-ignore
        ref={calendarRef}
        view="month"
        height="800px"
        isReadOnly={true}
        usageStatistics={false}
        useDetailPopup={true}
        theme={theme}
        calendars={calendars}
        events={schedules}
        month={
          { isAlways6Weeks: false, }
        }
        template={{
          popupEdit() {
            return <span onClick={() => alert('권한이 필요합니다.')}>Edit</span>;
          },
          popupDelete() {
            return 'Close';
          },
        }}
      />
    </MainContainer>
  );
};

export default CalendarPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
