import { ISchedule } from 'tui-calendar'

export const currentYear = 2025
export const currentMonth = 9
export const currentLastDate = 30
export const schedules: ISchedule[] = [
  {
    id: '1',
    calendarId: '1',
    title: 'if kakao 2025',
    start: '2025-09-23T09:30:00',
    end: '2025-09-25T18:00:00',
    body: 'https://if.kakao.com/2025/?ref=devblogeasyoon',
    state: 'if(kakao)25 카카오 AI 캠퍼스',
    attendees: ['Kakao'],
    //@ts-ignore
    customStyle: {
      backgroundColor: 'var(--Color-Grayscale-dim-white-50)',
      borderRadius: '100px',
    },
  },
  {
    id: '2',
    calendarId: '1',
    title: 'DevGround 2025',
    start: '2025-09-18T19:30:00',
    end: '2025-09-20T21:00:00',
    state: '한빛미디어 (홍대입구역 인근)',
    body: 'https://devground2025.hanbit.co.kr/?ref=devblogeasyoon',
    attendees: ['한빛미디어'],
    //@ts-ignore
    customStyle: {
      backgroundColor: 'var(--Color-Grayscale-dim-white-50)',
      borderRadius: '100px',
    },
  },
  {
    id: '3',
    calendarId: '2',
    title: '[flexible] 모든 탭에 퍼지는 실시간 이벤트, SSE 1개로 끝내는 전략',
    start: '2025-09-25T19:00:00',
    end: '2025-09-25T21:00:00',
    state: '사전예약 필요',
    body: 'https://flex.team/blog/2025/09/02/sse/?ref=devblogeasyoon',
    attendees: ['플렉스팀'],
  },
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
]
