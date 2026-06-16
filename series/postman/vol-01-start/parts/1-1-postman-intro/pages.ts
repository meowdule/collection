import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { createPartFigFn } from '@shared/guide/part-figures'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import { VOL01_COVER } from '@series/postman/vol-01-start/cover'
import meta from './meta.json'

export const partId = '1-1-postman-intro'
export { meta }

const fig = createPartFigFn(
  import.meta.glob<string>('./images/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

const body: ContentPageData[] = [
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
        body: `앱·웹 화면 뒤에서는 앱과 서버가 계속 대화해요.<br>
버튼을 누르면 앱이 서버에 “이 아이디·비밀번호 맞나요?”라고 묻고, 서버가 “맞아요, 여기 토큰이에요”라고 답하는 식이에요.<br>
Postman은 이 대화를 <strong>앱 화면 없이</strong> 직접 해볼 수 있게 해줘요.`,
      },
      {
        kind: 'code-block',
        caption:
          '로그인 요청을 보내면 서버가 이런 형태로 답해요. Vol.2(자동화)에서 token을 꺼내 자동 저장하는 법을 다뤄요.',
        code: `{
  "status": "success",
  "user": {
    "id": 1042,
    "name": "홍길동",
    "email": "hong@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}`,
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
    ],
  },
  {
    type: 'content',
    blocks: [
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
            title: '“응답이 왔는데 이게 정상인지 오류인지 판단이 안 돼요”',
            body: `Postman은 상태 코드, 메시지, 데이터를 한 화면에서 보여줘요.<br>
“200이면 성공, 401이면 로그인 문제”처럼 응답을 읽는 법을 자연스럽게 익힐 수 있어요.`,
          },
          {
            title: '“어제 됐던 테스트가 오늘 안 되는데 똑같이 재현하기가 어려워요”',
            body: '요청을 저장해두면 URL, 파라미터, 데이터까지 그대로 보존돼요. 언제든 같은 조건으로 다시 실행할 수 있어요.',
          },
        ],
      },
      {
        kind: 'section-header',
        label: '활용법',
        title: '이 자료집, 이렇게 쓰세요',
      },
      {
        kind: 'quote',
        text: `각 파트는 화면을 보면서 직접 실행해 보는 구조예요. 스크린샷을 보면서 같은 화면을 찾아 따라하면 돼요.<br>
이론을 먼저 외우려 하지 않아도 괜찮아요 — 일단 따라하다 보면 자연스럽게 이해돼요.`,
      },
      {
        kind: 'tip-box',
        html: '파트가 끝날 때마다 <strong>“이렇게 보이면 완료”</strong> 확인 항목이 있어요. 해당 화면이 보이면 다음 파트로 넘어가면 됩니다.',
      },
      {
        kind: 'text',
        text: `브라우저에서 바로 쓸 수도 있고 PC에 설치해서 쓸 수도 있어요.<br>
어느 쪽이든 실습은 동일하게 따라할 수 있어요. 여는 방법은 이 파트 마지막 <strong>앱 설치</strong>에서 다뤄요.<br>
API, Request, Response 같은 단어가 처음 등장하는 파트에서 짧게 설명하고 넘어가요. 미리 외우려 하지 않아도 돼요.`,
      },
      {
        kind: 'warn-box',
        html: `<strong>막히면 이렇게 하세요.</strong><br>
화면이 다르게 보이거나 버튼을 못 찾겠으면 Postman UI가 업데이트된 경우일 수 있어요.<br>
버튼 이름·위치만 조금 달라진 경우가 많아요<br>
— 비슷한 위치에서 같은 이름을 찾아보세요. 그래도 모르겠으면 자료집 담당자에게 문의하세요.`,
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '설치',
        title: 'Postman 여는 방법 — 두 가지',
        lead: '설치 없이 브라우저에서 바로 열거나, PC에 앱을 설치할 수 있어요. 어느 쪽이든 이후 실습은 동일하게 따라할 수 있어요.',
      },
      {
        kind: 'split-2',
        left: {
          title: '웹 버전 (설치 없음)',
          lucide: 'globe',
          body: '브라우저에서 바로 시작할 수 있어요.',
          items: [
            '<a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">postman.com</a> 접속',
            '우측 상단 <strong>Sign In</strong> 클릭',
            '다음 파트(1-2)에서 회원가입·로그인',
          ],
          variant: 'post',
        },
        right: {
          title: '데스크톱 앱 설치',
          lucide: 'monitor',
          body: '아래에서 다운로드·설치를 따라해요.',
          items: [
            '<a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer">postman.com/downloads</a>',
            'OS에 맞는 파일 받기 · 설치',
          ],
          variant: 'app',
        },
      },
      {
        kind: 'figure',
        figure: fig('00-start-postman.png', 'postman.com 홈 — 우측 상단 Sign In / Sign Up'),
      },
      {
        kind: 'tip-box',
        html: '어느 쪽을 선택해도 괜찮아요. 팀에서 정한 방식이 있으면 그걸 따라가세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '앱 설치',
        title: 'PC 앱 다운로드·설치',
        lead: '아래 순서대로 설치 파일을 받고 실행해요.',
      },
      {
        kind: 'text',
        text: '<strong>다운로드:</strong> <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer">postman.com/downloads</a> · 주소창에 직접 입력',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: '다운로드 & 설치',
            body: '<strong>Download</strong>를 눌러 설치 파일을 받고, 실행해 설치를 마쳐요. Windows는 보통 <strong>.exe</strong> 파일이에요.',
            figure: fig('01-downloads-page.png', '다운로드 페이지 — Download 버튼'),
          },
          {
            title: '첫 화면 확인',
            body: '설치가 끝나면 Postman이 바로 열리고 아래처럼 첫 화면(로그인·가입 안내)이 보여요.',
            figure: fig('03-app-launched.png', '설치 직후 Postman 첫 화면'),
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
        label: '확인',
        title: '설치 마무리',
        lead: '아래를 확인한 뒤 다음 자료집(1-2)으로 넘어가세요.',
      },
      {
        kind: 'tip-box',
        html: '<strong>계정이 필요해요.</strong><br>이 화면까지 오면 설치는 끝난 거예요.<br>회원가입·로그인은 <strong>다음 자료집(1-2 Postman 시작하기)</strong>에서 이어서 진행해 주세요.',
      },
      {
        kind: 'check-done',
        items: [
          '웹만 쓸 거면 이 장은 <strong>건너뛰어도</strong> 됩니다 (1-2로 바로 이동)',
          'Postman 앱이 설치되고 첫 화면이 열렸어요',
          '다음 자료집 1-2에서 회원가입·로그인을 진행할 준비가 됐어요',
        ],
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    brand: VOL01_COVER,
    partNum: '1-1',
    partTitle: 'Postman이 뭔가요',
    partLabel: 'PART 01 · Postman 소개 & 설치',
  },
  toc: {
    goals: [
      'Postman이 <strong>어떤 도구인지</strong>, 어떤 상황에서 쓰는지 말할 수 있어요.',
      'Postman 앱을 설치하거나 웹에서 열 수 있어요.',
    ],
    quote: '이 파트 흐름: Postman 개요 → 설치 방법 선택 → 앱 설치',
    flowCards: [
      { title: 'Postman 개요', body: '한 줄 정의 · API 비유 · 실무 상황' },
      { title: '앱 설치', body: '웹 버전 · 데스크톱 설치 · 실행 확인' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-1',
    roadmap: VOL01_ROADMAP,
    ctaTitle: 'Vol.1부터 시작해요',
    ctaSubtitle: '1-2에서 회원가입·로그인과 화면 구성을 같이 해볼게요.',
  },
})
