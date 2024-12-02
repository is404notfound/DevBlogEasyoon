import { ISchedule } from "tui-calendar";

export const currentYear = 2024;
export const currentMonth = 12;
export const currentLastDate = 31;
export const schedules: ISchedule[] = [
    {
      id: '1',
      calendarId: '1',
      title: 'AWS re:Invent 2024',
      start: '2024-12-02T00:00:00',
      end: '2024-12-06T23:59:59',
      body: 'https://reinvent.awsevents.com/',
      state: '온라인 라이브 스트리밍 가능',
      attendees: ['AWS'],
    },
    {
      id: '2',
      calendarId: '2',
      title: 'Notion Innovators Summit Seoul 2024',
      start: '2024-12-07T10:00:00',
      end: '2024-12-07T18:00:00',
      state: '장소: 경희대학교 오비스홀 151 그랜드볼룸',
      body: 'https://summit.makenotion.us/',
      attendees: ['Notion'],
      //@ts-ignore
      customStyle: {
        backgroundColor: 'var(--Color-Grayscale-dim-white-50)',
        borderRadius: '100px',
      },
    },
    // {
    //   id: '3',
    //   calendarId: '2',
    //   title: 'DAN24',
    //   start: '2024-11-11T10:00:00',
    //   end: '2024-11-12T18:00:00',
    //   state: '사전예약 필요',
    //   body: 'https://dan.naver.com/24?ref=codenary',
    //   attendees: ['Naver'],
    // },
    // {
    //   id: '4',
    //   calendarId: '2',
    //   title: 'Microsoft Ignite',
    //   state: '사전예약 필요/온라인 참여 가능',
    //   body: 'https://ignite.microsoft.com/en-US/home',
    //   start: '2024-11-19T00:00:00',
    //   end: '2024-11-21T23:59:59',
    //   attendees: ['Microsoft'],
    // },
    // {
    //   id: '5',
    //   calendarId: '1',
    //   title: 'liftio2024 사전 예약',
    //   state: '온라인 참여 가능',
    //   body: 'https://maily.so/liftio/posts/x1zg0039rqg',
    //   start: '2024-11-04T00:00:00',
    //   end: '2024-12-09T23:59:59',
    // }
  ];