import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { createPartFigFn } from '@shared/guide/part-figures'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import { VOL01_COVER } from '@series/postman/vol-01-start/cover'
import meta from './meta.json'

export const partId = '1-5-collection-create'
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
        label: 'Collection',
        title: 'Collection이 뭔가요',
        lead: '1-4에서 가져온 실습 Collection과 구분해서 이해해요.',
      },
      {
        kind: 'key-box',
        headline: '관련 요청을 한곳에 모아 관리하는 보관함이에요.',
        body: 'Workspace 안에 여러 Collection을 둘 수 있어요.<br>안에는 <strong>Request</strong>(요청)와 <strong>Folder</strong>(하위 묶음)가 들어갑니다.',
      },
      {
        kind: 'split-2',
        left: {
          title: '📦 Vol.1 실습 Collection',
          body: '강사가 제공한 <strong>예제</strong> — 1-4 Import',
          items: [
            'Request·Folder가 이미 들어 있음',
            '<strong>1-6</strong>에서 <strong>Echo GET 요청</strong>을 열고 Send',
          ],
          variant: 'app',
        },
        right: {
          title: '✏️ 내 연습 Collection',
          body: '이번 파트에서 직접 <strong>만드는 연습</strong>',
          items: [
            'Collection 생성 + Request 추가',
            'URL · Send는 <strong>1-6</strong>에서 <strong>Echo GET 요청</strong>으로 진행',
          ],
          variant: 'post',
        },
      },
      {
        kind: 'tip-box',
        html: '이번 파트(1-5)에서는 <strong>내 연습 Collection</strong>을 만들고, 그 안에 Request를 하나 직접 추가해요.<br>목표는 Collection 안에 Request가 들어가는 <strong>구조를 직접 경험</strong>하는 것이에요. URL 입력과 Send는 <strong>1-6</strong>에서 처음 합니다.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '만들기',
        title: '새 Collection을 만들어요',
        lead: '1-3 Workspace가 선택된 상태에서 진행해요.',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: 'Create 클릭',
            body: '왼쪽 <strong>Collections</strong> 옆 <strong>+</strong> 또는 <strong>Create</strong>를 눌러요.',
            figure: fig('01-create-button.png', 'Collections — Create / + 버튼'),
          },
          {
            title: 'Collection 선택 · 이름 입력',
            body: '<strong>Collection</strong>을 고르고 이름을 <strong>내 연습 Collection</strong>으로 입력해요. 생성 후에도 Overview 제목을 클릭해 이름을 바꿀 수 있어요.',
            figure: fig('02-collection-name.png', 'Collection 생성 · 이름 변경'),
          },
        ],
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'steps',
        startAt: 3,
        steps: [
          {
            title: 'Create Collection',
            body: '<strong>Create Collection</strong>을 누르면 왼쪽 목록에 새 Collection이 추가돼요. 비어 있는 상태가 정상이에요.',
            figure: fig('03-collection-created.png', '생성 완료 — 내 연습 Collection · Add request'),
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
        label: 'Request 추가',
        title: 'Collection 안에 Request를 넣어요',
        lead: '방금 만든 <strong>내 연습 Collection</strong> 안에 요청 하나를 추가해요. URL 입력과 Send는 아직 하지 않습니다.',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: '내 연습 Collection 선택 · Add request',
            body: '왼쪽 Collections에서 <strong>내 연습 Collection</strong>을 선택한 뒤 <strong>Add request</strong> 버튼을 눌러요. <strong>···</strong> 메뉴에서 <strong>Add request</strong>를 선택해도 됩니다.',
            figure: fig('05-add-request.png', 'Add request 버튼 클릭'),
          },
          {
            title: '요청 이름 입력',
            body: '상단 요청 이름을 클릭해 <strong>Echo GET 요청</strong>으로 바꿔요. 이름은 자동으로 저장돼요.',
            figure: fig('06-request-name.png', '요청 이름 변경 — Echo GET 요청'),
          },
        ],
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'steps',
        startAt: 3,
        steps: [
          {
            title: '목록 확인',
            body: '왼쪽 <strong>내 연습 Collection</strong> 안에 <strong>Echo GET 요청</strong>이 보이면 성공이에요. URL은 아직 입력하지 않아도 됩니다.',
            figure: fig('07-request-created.png', 'Request 추가 완료 — Echo GET 요청'),
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
        label: '구조',
        title: '두 Collection 구조 비교해요',
        lead: '방금 만든 구조와 강사 제공 실습 Collection을 나란히 봐요.',
      },
      {
        kind: 'cards-2',
        cards: [
          {
            lucide: 'file-code',
            iconBg: '#e0f2fe',
            iconColor: '#0369a1',
            title: 'Request',
            body: '방금 추가한 <strong>Echo GET 요청</strong> · GET Echo 테스트 등',
          },
          {
            lucide: 'folder',
            iconBg: '#fef3c7',
            iconColor: '#b45309',
            title: 'Folder',
            body: 'Request가 많아지면 Folder로 묶어요 — Vol.1 실습 Collection 참고',
          },
        ],
      },
      {
        kind: 'code-block',
        caption: '내 연습 Collection — 방금 만든 구조',
        code: `내 연습 Collection
└ Echo GET 요청            ← Request  (1-6 URL · Send)`,
      },
      {
        kind: 'code-block',
        caption: '1-8 이후 확장 예시',
        code: `내 연습 Collection
├ Echo GET 요청            ← 1-6 GET · 1-7 Params
└ Echo POST 요청           ← 1-8 POST Body`,
      },
      {
        kind: 'tip-box',
        html: '<strong>Echo GET 요청</strong>은 1-6 · 1-7까지 같은 요청을 계속 발전시켜 씁니다. 1-8에서 <strong>Echo POST 요청</strong>을 새로 추가해 Collection을 넓혀 볼 거예요.',
      },
      {
        kind: 'code-block',
        caption: 'Vol.1 실습 Collection — 강사 제공 예제',
        code: `Vol.1 실습 Collection
├ 연결 테스트           ← Folder
│   └ GET Echo 테스트    ← Request  (1-4 연결 확인)
├ GET 요청 실습         ← Folder
│   └ GET 기본 요청      ← Request  (구조 참고)
├ Query Params 실습
│   └ GET Query Params 요청
└ POST 요청 실습
    └ POST Body 요청`,
      },
      {
        kind: 'figure',
        figure: fig(
          '08-collection-structure-compare.png',
          '내 연습 Collection · Vol.1 실습 Collection 트리 비교',
        ),
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 1-5 완료예요',
        lead: '아래를 모두 확인했으면 다음 파트(1-6)로 넘어가도 됩니다.',
      },
      {
        kind: 'check-done',
        items: [
          '<strong>내 연습 Collection</strong>을 직접 만들었어요',
          '<strong>내 연습 Collection</strong> 안에 <strong>Echo GET 요청</strong>을 추가했어요',
          '<strong>Collection → Folder → Request</strong> 구조를 이해했어요',
          '<strong>Vol.1 실습 Collection</strong>(강사 예제)과 <strong>내 연습 Collection</strong>(직접 만든 연습용 Collection)의 차이를 설명할 수 있어요',
          'URL 입력 · Send는 <strong>1-6</strong>에서 한다는 것을 알고 있어요',
        ],
      },
      {
        kind: 'tip-box',
        html: '다음 파트(1-6)에서는 <strong>내 연습 Collection</strong> → <strong>Echo GET 요청</strong>을 열고, URL을 입력한 뒤 Postman Echo에 Send해 볼 거예요.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    brand: VOL01_COVER,
    partNum: '1-5',
    partTitle: 'Collection 만들기',
    partLabel: 'PART 05 · Collection',
  },
  toc: {
    goals: [
      'Collection을 <strong>직접 만들고</strong> 안에 Request를 추가할 수 있어요.',
      '<strong>Collection → Folder → Request</strong> 구조를 이해할 수 있어요.',
      '강사 제공 Collection과 <strong>내가 만든 Collection</strong>의 차이를 말할 수 있어요.',
    ],
    quote: '이 파트 흐름: Collection 만들기 → Request 추가 → 구조 비교 (Send는 1-6)',
    flowCards: [
      { title: 'Collection 만들기', body: '내 연습 Collection' },
      { title: 'Request 추가', body: 'Echo GET 요청 · 자동 저장' },
      { title: '구조 비교', body: '내 Collection · Vol.1 실습' },
      { title: '확인', body: '완료 체크 · 1-6 예고' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-5',
    roadmap: VOL01_ROADMAP,
    ctaTitle: 'Collection · Request 준비 완료! 다음은 Send',
    ctaSubtitle: '1-6에서 내 연습 Collection의 Echo GET 요청을 열고 Echo에 Send해 볼 거예요.',
  },
})
