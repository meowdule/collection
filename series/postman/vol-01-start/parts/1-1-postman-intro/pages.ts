import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import meta from './meta.json'

export const partId = '1-1-postman-intro'
export { meta }

const VOL1_ROADMAP = [
  { num: '1-1', label: 'Postman이 뭔가요' },
  { num: '1-2', label: '회원가입 & 로그인' },
  { num: '1-3', label: '웹 실행 및 앱 설치' },
  { num: '1-4', label: '화면 구성 살펴보기' },
  { num: '1-5', label: 'Workspace 만들기' },
]

const body: ContentPageData[] = [
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '핵심 정리',
        title: 'Postman, 한 줄로 말하면',
      },
      {
        kind: 'key-box',
        headline: '서버(API)에 요청을 보내고, 돌아온 응답을 눈으로 확인하는 프로그램이에요.',
        body: '화면(앱·웹)을 거치지 않고 <strong>서버와 직접 대화</strong>할 수 있어요. 업무에서는 “버그가 화면 때문인지, 서버 때문인지”를 빠르게 가르는 도구라고 보면 돼요.',
      },
      {
        kind: 'section-header',
        label: '먼저 알면 좋아요',
        title: 'API가 뭔지 — 30초 버전',
        lead: 'API는 “앱이 서버에게 부탁하는 약속된 창구”예요. 로그인, 목록 조회, 결제 같은 기능마다 창구가 하나씩 있다고 보면 됩니다.',
      },
      {
        kind: 'split-2',
        left: {
          title: '🍽 비유: 카페 주문',
          body: '<strong>손님(앱)</strong>이 메뉴판에 맞춰 주문하면, <strong>주방(서버)</strong>이 음식을 만들어 내줘요.',
          items: [
            '주문 내용 = <strong>Request</strong> (요청)',
            '나온 음식 = <strong>Response</strong> (응답)',
            '메뉴·주문 규칙 = <strong>API</strong>',
          ],
          variant: 'app',
        },
        right: {
          title: '📮 Postman의 위치',
          body: '손님 대신 <strong>직원이 주방에 직접</strong> “이 주문 되나요?” 하고 확인하는 도구예요.',
          items: [
            '앱 화면 없이도 테스트 가능',
            '주방이 뭐라고 답했는지 글자 그대로 확인',
            '같은 주문을 반복해서 빠르게 검증',
          ],
          variant: 'post',
        },
      },
      {
        kind: 'section-header',
        label: '흐름',
        title: 'Postman은 여기에서 도와줘요',
        lead: '앱 화면을 건너뛰고, 서버와 직접 대화해서 “무슨 답이 왔는지”를 바로 확인합니다.',
      },
      {
        kind: 'flow',
        steps: [
          { icon: '나', iconClass: 'ico-you', title: 'Postman에서 요청', subtitle: '주소·방식·데이터 입력 후 Send' },
          { icon: '서버', iconClass: 'ico-sv', title: '서버가 처리', subtitle: '로그인·조회·저장 등 비즈니스 로직' },
          { icon: '응답', iconClass: 'ico-pm', title: '결과를 확인', subtitle: '성공/실패·메시지·데이터' },
        ],
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '역할',
        title: 'Postman으로 보통 하는 일',
      },
      {
        kind: 'cards-3',
        cards: [
          { icon: '①', iconBg: '#dbeafe', iconColor: '#1d4ed8', title: '단건 테스트', body: '로그인·조회·등록 API를 하나씩 눌러서 바로 결과를 봐요.' },
          { icon: '②', iconBg: '#d1fae5', iconColor: '#047857', title: '원인 분리', body: '앱 버그인지 서버 버그인지, 응답 내용으로 먼저 좁혀요.' },
          { icon: '③', iconBg: '#ffedd5', iconColor: '#c2410c', title: '기록·공유', body: '만든 요청을 모아 두고, 팀과 같은 조건으로 다시 써요.' },
        ],
      },
      {
        kind: 'section-header',
        label: '있을 때',
        title: 'Postman이 있으면 이렇게 달라져요',
      },
      {
        kind: 'cards-2',
        cards: [
          { title: '🔍 응답을 그대로 본다', body: '상태 코드, 메시지, JSON 데이터를 직접 읽어요.' },
          { title: '⚡ 속도가 빨라진다', body: '화면 이동 없이 Send 한 번으로 반복 테스트가 쉬워요.' },
          { title: '📋 재현이 쉬워진다', body: '요청을 저장해 두면 동일 조건으로 언제든 다시 보낼 수 있어요.' },
          { title: '🤝 소통이 명확해진다', body: '요청·응답을 캡처·공유하면 개발자와 같은 그림을 봅니다.' },
          { title: '🧩 UI보다 먼저 검증', body: '화면 개발 전에 API만 먼저 확인해 일정을 앞당길 수 있어요.' },
          { title: '🔁 자동화로 확장', body: '토큰 저장, Runner 등 — Vol.4·5에서 이어서 다뤄요.' },
        ],
      },
      {
        kind: 'section-header',
        label: '공감 포인트',
        title: 'Postman 없이 일할 때 — 이런 일이 자주 생겨요',
      },
      {
        kind: 'pain-rows',
        items: [
          { title: '개발자에게 매번 확인해야 해요', body: '“서버 문제예요, 앱 문제예요?”를 스스로 판단할 수 없어 소통 비용이 늘어요.' },
          { title: '화면만 보면 원인을 몰라요', body: '오류 메시지는 짧은데, 서버가 실제로 뭐라고 답했는지 확인이 어려워요.' },
          { title: '테스트 경로가 너무 깁니다', body: '빌드 → 로그인 → 메뉴 이동… 버튼 하나 보려고 매번 긴 과정을 반복해요.' },
          { title: 'UI가 없으면 막막해요', body: 'API는 완성됐는데 화면이 없으면, 테스트가 통째로 밀리는 경우가 생겨요.' },
        ],
      },
      {
        kind: 'quote',
        text: '“앱에서는 안 되는데, Postman에서는 된대요.” — 화면 문제와 서버 문제를 분리한 상황이에요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '비교',
        title: '앱으로만 테스트 vs Postman',
      },
      {
        kind: 'split-2',
        left: {
          title: '앱·웹 화면으로만',
          items: [
            'UI·버튼·화면 이동까지 한꺼번에 검증',
            '로그인·권한 등 “중간 단계”가 많이 끼어 있음',
            '실패 시 “어디서” 막혔는지 불명확',
          ],
          variant: 'app',
        },
        right: {
          title: 'Postman으로',
          items: [
            '서버(API)만 따로 빠르게 확인',
            '요청·응답을 텍스트로 그대로 공유',
            'UI 없어도 백엔드 먼저 검증 가능',
          ],
          variant: 'post',
        },
        footnote: '실무에서는 <strong>Postman으로 서버를 먼저 확인하고 → 앱에서 최종 확인</strong>하는 순서가 자주 쓰여요.',
      },
      {
        kind: 'section-header',
        label: '실무 예시',
        title: '이럴 때 Postman을 써요 (4가지)',
      },
      {
        kind: 'cards-2',
        cards: [
          { title: '예시 1 · 로그인 이슈', body: '로그인 API를 직접 호출해 서버 메시지를 확인하고, 앱/서버 원인을 분리해요.' },
          { title: '예시 2 · UI 없이 선검증', body: '화면이 없어도 회원가입/검증 API를 먼저 테스트해서 일정을 앞당겨요.' },
          { title: '예시 3 · 목록/검색 데이터', body: '응답 JSON에서 개수를 보고 “서버가 덜 주는지/앱이 덜 그리는지”를 나눠요.' },
          { title: '예시 4 · 버그 리포트', body: '요청·응답을 그대로 첨부해 재현이 쉬운 리포트를 만들어요.' },
        ],
      },
      {
        kind: 'section-header',
        label: '용어 정리',
        title: '자주 나오는 말 — 쉽게만',
      },
      {
        kind: 'term-grid',
        terms: [
          { term: 'API', definition: '앱과 서버가 약속한 “기능 창구”' },
          { term: 'Request', definition: '서버에게 보내는 요청 (주문서)' },
          { term: 'Response', definition: '서버가 돌려준 답 (영수증)' },
          { term: 'Collection', definition: '요청들을 모아 둔 폴더 (Vol.2)' },
          { term: 'Environment', definition: '주소·토큰 설정 묶음 (Vol.3)' },
          { term: 'GET / POST', definition: '“가져와” / “보내·만들어”' },
        ],
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    badges: ['Postman 사용법 자료집', 'Vol.1 설치 및 시작하기'],
    warmBadge: '1-1',
    partLabel: 'PART 01 · 개념 잡기',
    titleLines: ['Postman이', '뭔가요?'],
    leadLines: [
      '개발 용어 몰라도 괜찮아요.',
      '“앱과 서버가 나누는 대화”를 직접 보고 확인하는 도구, 그게 Postman이에요.',
    ],
  },
  toc: {
    goals: [
      'Postman이 <strong>왜 필요한지</strong> 업무 맥락으로 설명할 수 있어요.',
      'API·요청·응답을 <strong>비유로 이해</strong>하고, Postman이 어디에 끼는지 알아요.',
      '앱만으로 테스트할 때와 <strong>무엇이 다른지</strong> 비교할 수 있어요.',
      '실무에서 자주 나오는 상황 <strong>4가지 예시</strong>로 쓰임새를 떠올릴 수 있어요.',
    ],
    quote: '지금은 설치가 목표가 아니라, “왜 쓰는지”만 잡으면 돼요. 계정·로그인은 다음 파트(1-2)에서 같이 해요.',
    flowCards: [
      { title: '왜 쓰는지(필요성)', body: '“없으면 불편한 이유”부터 공감 포인트로 시작해요.' },
      { title: '한 줄 정의 + API 이해', body: '주문 비유로 Request → Response 흐름을 잡아요.' },
      { title: '앱 테스트 vs Postman', body: '원인 분리(앱/서버)를 어떻게 하는지 비교해요.' },
      { title: '실무 예시 + 용어', body: '자주 겪는 상황 4개와 용어를 짧게 정리해요.' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: 'Vol.1 로드맵',
    currentPartNum: '1-1',
    roadmap: VOL1_ROADMAP,
    ctaTitle: '개념은 잡혔어요. 다음은 계정 만들기!',
    ctaSubtitle: '1-2에서 회원가입·로그인하고 Postman 계정을 연결해 볼 거예요.',
  },
})
