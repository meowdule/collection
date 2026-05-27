import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import meta from './meta.json'

export const partId = '1-1-postman-intro'
export { meta }

const body: ContentPageData[] = [
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '자료집 소개',
        title: '이 자료집은 어떻게 만들어졌나요',
        lead: 'Postman을 처음 접하는 분들이 “어디서부터 시작해야 하지?”라는 막막함 없이 바로 실습할 수 있도록 만든 <strong>따라하기형 자료집</strong>이에요. 개념 설명보다 실제로 손을 움직이는 것에 초점을 맞췄어요.',
      },
      {
        kind: 'quote',
        text: '각 파트는 하나의 행동 흐름을 기준으로 구성되어 있어요. 순서대로 따라하면 자연스럽게 Postman 사용법이 익혀집니다. 파트당 읽는 시간은 3~5분 정도예요 — Postman을 열어두고 따라하는 방식이 가장 효과적이에요.',
      },
      {
        kind: 'section-header',
        label: '전체 흐름',
        title: 'Vol.1~4 전체 흐름',
      },
      {
        kind: 'cards-2',
        cards: [
          {
            title: 'Vol.1 · 설치 및 시작하기',
            body: 'Postman 계정 만들기, 화면 구성 익히기, Workspace 만들기',
          },
          {
            title: 'Vol.2 · 첫 번째 요청 보내기',
            body: 'Collection 만들기, GET·POST 요청, 응답 확인, 저장·재실행',
          },
          {
            title: 'Vol.3 · 변수 & 로그인 자동화',
            body: 'Environment·변수 등록, 로그인 요청, 토큰 자동 저장·적용',
          },
          {
            title: 'Vol.4 · 연속 실행',
            body: 'Collection Runner 연속 실행, CSV/JSON 반복, 결과 확인',
          },
        ],
      },
      {
        kind: 'tip-box',
        html: 'Vol.1은 Postman을 처음 여는 것부터 시작해요. 아직 설치도 안 한 상태라도 괜찮아요. Vol.2부터 실제 요청 실습이 시작되고, Vol.3·4로 갈수록 <strong>반복 작업 자동화</strong> 방향으로 이어져요.',
      },
      {
        kind: 'section-header',
        label: '완료 후',
        title: '이 자료집을 다 마치면 이런 게 가능해요',
        lead: '지금은 생소하게 느껴지더라도, Vol.1~4를 순서대로 따라하고 나면 아래 작업들을 혼자 할 수 있게 돼요.',
      },
      {
        kind: 'check-done',
        items: [
          'Postman에서 API 요청을 만들고 결과를 바로 확인할 수 있어요',
          '로그인 토큰을 매번 복사·붙여넣기 하지 않고 자동으로 저장·적용할 수 있어요',
          '여러 요청을 순서대로 한 번에 실행하고 결과를 한눈에 볼 수 있어요',
          '팀과 같은 요청을 공유하고, 동일한 조건으로 다시 실행할 수 있어요',
        ],
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'Postman 개요',
        title: 'Postman이 뭔가요 — 한 줄로',
      },
      {
        kind: 'key-box',
        headline: '서버(API)에 요청을 보내고, 돌아온 응답을 눈으로 확인하는 도구예요.',
        body: '앱·웹 화면 뒤에서는 앱과 서버가 계속 대화해요. 로그인 버튼을 누르면 앱이 서버에 “이 아이디·비밀번호 맞나요?”라고 묻고, 서버가 “맞아요, 여기 토큰이에요”라고 답하는 식이에요. Postman은 이 대화를 <strong>앱 화면 없이</strong> 직접 해볼 수 있게 해줘요.',
      },
      {
        kind: 'section-header',
        label: '30초 이해',
        title: 'API가 뭔지 — 30초 버전',
        lead: 'API는 앱과 서버가 대화하는 창구예요. 로그인, 목록 조회, 데이터 저장 같은 기능마다 창구가 하나씩 있다고 보면 돼요.',
      },
      {
        kind: 'split-2',
        left: {
          title: '🍽 카페 비유',
          body: '손님(앱)이 메뉴판에 맞춰 주문하면 주방(서버)이 음식을 만들어 내줘요.',
          items: [
            '주문 = <strong>Request</strong> (요청)',
            '음식 = <strong>Response</strong> (응답)',
            '메뉴판 = <strong>API</strong>',
          ],
          variant: 'app',
        },
        right: {
          title: '📮 Postman',
          body: '손님 대신 직원이 주방에 직접 확인하는 도구예요.',
          items: [
            '“이 주문 되나요?”를 바로 물어볼 수 있어요',
            '주방이 뭐라고 답했는지 글자 그대로 확인',
          ],
          variant: 'post',
        },
      },
      {
        kind: 'section-header',
        label: '실무',
        title: '이런 상황에서 Postman을 써요',
        lead: '업무 중 이런 경험이 있다면 Postman이 바로 도움이 돼요.',
      },
      {
        kind: 'pain-rows',
        items: [
          {
            title: '“버그인데 화면 문제인지 서버 문제인지 모르겠어요”',
            body: 'Postman으로 서버에 직접 요청하면 응답을 바로 확인할 수 있어요. 응답이 정상이면 화면 문제, 이상하면 서버 문제로 빠르게 나눌 수 있어요.',
          },
          {
            title: '“테스트하려면 매번 로그인·화면 이동이 번거로워요”',
            body: '요청을 저장해두고 Send 한 번으로 실행할 수 있어요. 로그인·화면 이동 없이 원하는 API를 바로 호출할 수 있어요.',
          },
          {
            title: '“개발자한테 매번 물어봐야 해서 소통 비용이 높아요”',
            body: '“서버가 이렇게 답했어요”라고 근거를 가지고 대화할 수 있어요. 요청·응답을 그대로 공유하면 재현도 쉬워져요.',
          },
          {
            title: '“UI가 없는데 서버가 제대로 동작하는지 확인해야 해요”',
            body: '화면 없이 API를 직접 호출해 결과를 확인할 수 있어요. 개발 일정을 앞당기는 데 도움이 돼요.',
          },
        ],
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '비교',
        title: '앱으로만 테스트할 때 vs Postman',
        lead: '앱 화면으로만 테스트하면 로그인·권한·화면 이동 등 중간 단계가 많아 어디서 막혔는지 찾기 어렵고, 서버가 실제로 뭐라고 답했는지 확인하기도 어려워요.',
      },
      {
        kind: 'split-2',
        left: {
          title: '앱으로만 테스트',
          items: [
            '중간 단계(로그인·화면 이동)가 많음',
            '실패 시 원인 위치 파악이 어려움',
            '서버 응답 원문 확인이 어려움',
          ],
          variant: 'app',
        },
        right: {
          title: 'Postman',
          items: [
            '서버에 직접 요청 → 응답을 텍스트로 확인',
            '요청 저장 후 동일 조건 재실행',
            '팀과 요청·응답 공유 가능',
          ],
          variant: 'post',
        },
        footnote: '실무에서는 <strong>Postman으로 서버를 먼저 확인 → 앱에서 최종 확인</strong>하는 순서가 자주 쓰여요.',
      },
      {
        kind: 'section-header',
        label: '활용법',
        title: '따라하기 중심이에요',
        lead: '각 파트는 화면을 보면서 직접 실행해 보는 구조예요. 스크린샷을 보면서 같은 화면을 찾아 따라하면 돼요. 이론을 먼저 외우려 하지 않아도 괜찮아요 — 일단 따라하다 보면 자연스럽게 이해돼요.',
      },
      {
        kind: 'tip-box',
        html: '파트가 끝날 때마다 <strong>“이렇게 보이면 완료”</strong> 확인 항목이 있어요. 해당 화면이 보이면 다음 파트로 넘어가면 됩니다.',
      },
      {
        kind: 'section-header',
        label: '환경',
        title: '웹이든 앱이든 괜찮아요',
        lead: '브라우저에서 바로 쓸 수도 있고, PC에 설치해서 쓸 수도 있어요. 웹으로 먼저 시작하고 나중에 앱을 설치해도 되고, 처음부터 앱으로 시작해도 돼요.',
      },
      {
        kind: 'tip-box',
        html: '여는 방법은 Vol.1 <strong>1-2</strong>에서 같이 해요. 어느 쪽이든 이 자료집 실습은 동일하게 따라할 수 있어요.',
      },
      {
        kind: 'section-header',
        label: '용어',
        title: '용어가 낯설어도 괜찮아요',
        lead: 'API, Request, Response, Collection, Environment — 처음 등장하는 파트에서 짧게 설명하고 넘어가요. 미리 외우려 하지 않아도 돼요.',
      },
      {
        kind: 'warn-box',
        html: '<strong>막히면 이렇게 하세요.</strong> 화면이 다르게 보이거나 버튼을 못 찾겠으면 Postman UI가 업데이트된 경우일 수 있어요. 버튼 이름·위치만 조금 달라진 경우가 많아요 — 비슷한 위치에서 같은 이름을 찾아보세요. 그래도 모르겠으면 자료집 담당자에게 문의하세요.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    badges: ['Postman 사용법 자료집', 'Vol.1 설치 및 시작하기'],
    warmBadge: '1-1',
    partLabel: 'PART 01 · 시리즈 소개',
    titleLines: ['Postman이 뭔가요?'],
    leadLines: [
      'Vol.1~4로 Postman을 처음부터 실무까지',
      '설치부터 자동화까지, 단계별로 따라하면서 익혀요',
    ],
  },
  toc: {
    goals: [
      '이 자료집이 <strong>어떤 흐름으로 구성</strong>되어 있는지 알아요.',
      'Postman이 <strong>어떤 도구인지</strong>, 어떤 상황에서 쓰는지 말할 수 있어요.',
      'Vol.1부터 <strong>어떻게 따라하면 되는지</strong> 감을 잡았어요.',
    ],
    quote: '이 파트 흐름: 자료집 구성 소개 → Postman 개요 → 활용법 안내',
    flowCards: [
      { title: '자료집 구성 소개', body: '만든 이유 · Vol.1~4 · 완료 후 가능한 일' },
      { title: 'Postman 개요', body: '한 줄 정의 · API 비유 · 실무 상황' },
      { title: '앱 vs Postman', body: '테스트 방식 차이 · 실무 순서' },
      { title: '활용법 안내', body: '따라하기 · 웹/앱 · 용어 · 막힐 때' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-1',
    roadmap: VOL01_ROADMAP,
    ctaTitle: 'Vol.1부터 시작해요',
    ctaSubtitle: '1-2에서 Postman을 열고 계정을 연결하는 것부터 같이 해볼게요.',
  },
})
