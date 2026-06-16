import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { createPartFigure } from '@shared/guide/part-figures'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import { VOL01_COVER } from '@series/postman/vol-01-start/cover'
import { VOL01_PRACTICE_ECHO_BASE } from '@series/postman/vol-01-start/practice-collection'
import meta from './meta.json'
import imgOpenGetRequest from './images/01-open-get-request.png?url'
import imgUrlInput from './images/02-url-input.png?url'
import imgSendResponse from './images/03-send-response.png?url'
import imgResponseBody from './images/04-response-body.png?url'
import imgFailureResponse from './images/05-failure-response.png?url'

export const partId = '1-6-basic-get'
export { meta }

const GET_ECHO_URL = `${VOL01_PRACTICE_ECHO_BASE}/get`

const partImageUrls: Record<string, string> = {
  '01-open-get-request.png': imgOpenGetRequest,
  '02-url-input.png': imgUrlInput,
  '03-send-response.png': imgSendResponse,
  '04-response-body.png': imgResponseBody,
  '05-failure-response.png': imgFailureResponse,
}

const partImages = Object.fromEntries(
  Object.entries(partImageUrls).map(([file, url]) => [`./images/${file}`, url]),
)

function fig(file: string, caption: string): FigureSlot {
  return createPartFigure(partImages, file, caption)
}

const body: ContentPageData[] = [
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '요청 보내기',
        title: 'Method · URL · Send',
        lead: '1-5에서 만든 <strong>Echo GET 요청</strong>으로 Method · URL · Send를 처음 보내 볼 거예요.',
      },
      {
        kind: 'key-box',
        headline: 'Postman에서 요청은 <strong>Method</strong> + <strong>URL</strong> + <strong>Send</strong> 세 가지로 보내요.',
        body: '상단 요청 편집기에서 Method를 고르고, URL 칸에 주소를 입력한 뒤 <strong>Send</strong>를 누르면 아래 <strong>Response</strong>에 결과가 나타납니다.',
      },
      {
        kind: 'cards-2',
        cards: [
          {
            lucide: 'globe',
            iconBg: '#e0f2fe',
            iconColor: '#0369a1',
            title: 'Method',
            body: '요청 방식 — 이번 실습은 <strong>GET</strong>',
          },
          {
            lucide: 'pen-line',
            iconBg: '#fef3c7',
            iconColor: '#b45309',
            title: 'URL',
            body: '요청을 보낼 <strong>주소</strong> — 가장 자주 수정하는 칸',
          },
        ],
      },
      {
        kind: 'split-2',
        left: {
          title: '📤 GET',
          body: '데이터를 <strong>가져올 때</strong>',
          items: ['주소를 기준으로 데이터 요청', '브라우저 주소창과 비슷한 방식'],
          variant: 'app',
        },
        right: {
          title: '📥 POST',
          body: '데이터를 <strong>보낼 때</strong>',
          items: ['Body에 내용을 담아 전송', '<strong>1-8</strong>에서 실습'],
          variant: 'post',
        },
      },
      {
        kind: 'tip-box',
        html: `보낼 서버는 <strong>Postman Echo</strong>(<code>${VOL01_PRACTICE_ECHO_BASE}</code>)예요.<br><strong>Vol.1 실습 Collection</strong>은 1-4 Import·구조 참고용이고, 이번 파트부터는 <strong>내 연습 Collection</strong>을 계속 씁니다.`,
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'URL',
        title: 'URL은 어떻게 읽나요',
        lead: '주소가 틀리면 요청이 실패해요. 실습 전에 한 번만 구조를 봐 두세요.',
      },
      {
        kind: 'code-block',
        caption: '이번 실습 URL — 각 부분의 의미',
        code: `https://postman-echo.com/get
└─┬─┘ └──────┬──────┘ └┬┘
  │          │          └ 경로(path) — Echo의 /get 엔드포인트
  │          └ 호스트(host) — 접속할 서버 이름
  └ 프로토콜 — https:// 로 시작 (http:// 도 가능)`,
      },
      {
        kind: 'key-box',
        headline: 'URL 칸에는 <strong>전체 주소</strong>를 그대로 붙여 넣어요.',
        body: '도메인만 적거나(<code>postman-echo.com</code>) 경로를 빼먹으면(<code>https://postman-echo.com</code>) 응답이 없거나 실패할 수 있어요.<br>실습에서는 아래 주소를 <strong>그대로</strong> 사용합니다.',
      },
      {
        kind: 'code-block',
        caption: '1-6 실습 주소',
        code: GET_ECHO_URL,
      },
      {
        kind: 'warn-box',
        html: '주소 앞뒤에 공백이 들어가지 않게 해요. 복사·붙여넣기 후 <code>https://</code>가 빠지지 않았는지 확인하세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '실습',
        title: 'Echo GET 요청을 보내요',
        lead: '<strong>내 연습 Collection</strong> → <strong>Echo GET 요청</strong>을 열어요. 1-5에서 만든 그 요청입니다.',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: 'Echo GET 요청 열기',
            body: 'Collections → <strong>내 연습 Collection</strong> → <strong>Echo GET 요청</strong>을 선택해요.',
            figure: fig('01-open-get-request.png', 'Echo GET 요청 — Collections 트리'),
          },
          {
            title: 'Method 확인 · URL 입력',
            body: `Method가 <strong>GET</strong>인지 확인하고, URL 칸에 아래 주소를 직접 입력하거나 붙여 넣어요.<br><code>${GET_ECHO_URL}</code>`,
            figure: fig('02-url-input.png', 'URL 칸 — postman-echo.com/get'),
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
            title: 'Send → 200 OK 확인',
            body: '<strong>Send</strong>를 누르면 아래 <strong>Response</strong> 영역에 결과가 나타나요.<br>상단 Status가 <strong>200 OK</strong>(초록색)이면 주소·연결이 맞고 요청이 성공한 거예요.',
            figure: fig('03-send-response.png', 'Send · 200 OK · Response'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: 'URL을 바꾼 뒤에는 다시 <strong>Send</strong>를 눌러야 새 주소로 요청이 나갑니다. 요청 내용은 Postman이 자동으로 보관해요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '성공 응답',
        title: '200 OK일 때 무엇을 보면 되나요',
        lead: 'Echo는 보낸 요청 정보를 JSON으로 돌려줘요.',
      },
      {
        kind: 'cards-2',
        cards: [
          {
            lucide: 'globe',
            iconBg: '#dcfce7',
            iconColor: '#15803d',
            title: 'Status',
            body: '<strong>200 OK</strong> — 요청이 정상 처리됨',
          },
          {
            lucide: 'file-code',
            iconBg: '#e0f2fe',
            iconColor: '#0369a1',
            title: 'Body',
            body: 'JSON 응답 본문 — Echo가 돌려준 요청 정보',
          },
        ],
      },
      {
        kind: 'code-block',
        caption: 'Echo 성공 응답 예시 (일부)',
        code: `{
  "args": {},
  "headers": { ... },
  "url": "${GET_ECHO_URL}"
}`,
      },
      {
        kind: 'figure',
        figure: fig('04-response-body.png', 'Body JSON — url · headers 등'),
      },
      {
        kind: 'tip-box',
        html: 'Body의 <code>url</code>에 방금 입력한 주소가 보이면 Echo가 요청을 정상적으로 받은 거예요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '실패',
        title: '실패할 때는 어떻게 보이나요',
        lead: '주소 오타·경로 오류·인터넷 문제가 있으면 성공(200) 대신 다른 화면이 나와요.',
      },
      {
        kind: 'pain-rows',
        items: [
          {
            title: '404 Not Found',
            body: `서버에는 연결됐지만 경로가 틀렸을 때 — 예: <code>${VOL01_PRACTICE_ECHO_BASE}/wrong</code><br>Status가 <strong>404</strong>로 보이고 Body에 오류 메시지가 나올 수 있어요.`,
          },
          {
            title: 'Could not send request',
            body: '도메인 오타·인터넷 끊김 등으로 서버에 닿지 못할 때 — 예: <code>https://postman-echoo.com/get</code> (o 하나 더)<br>Status 대신 빨간 오류 문구가 Response 영역에 표시돼요.',
          },
        ],
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '일부러 틀린 주소로 Send 해 보기',
            body: `URL 끝을 <code>/gett</code>처럼 바꿔 <strong>Send</strong>를 눌러 보세요. <strong>404</strong> 또는 오류 메시지가 보이면 정상이에요.<br>확인 후에는 반드시 다시 <code>${GET_ECHO_URL}</code>로 고친 뒤 Send해서 <strong>200 OK</strong>로 돌아오는지 확인하세요.`,
            figure: fig('05-failure-response.png', '실패 응답 — 404 또는 Could not send request'),
          },
        ],
      },
      {
        kind: 'warn-box',
        html: '실패 화면이 나와도 Postman이 망가진 게 아니에요. 실습 후에는 <strong>Echo GET 요청</strong> URL을 원래 주소로 되돌려 두세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 1-6 완료예요',
        lead: '아래를 모두 확인했으면 다음 파트(1-7)로 넘어가도 됩니다.',
      },
      {
        kind: 'check-done',
        items: [
          '요청 보내기는 <strong>Method · URL · Send</strong> 순서라는 것을 알고 있어요',
          '<strong>내 연습 Collection</strong> → <strong>Echo GET 요청</strong>을 열고 URL에 <strong>전체 주소</strong>를 직접 입력했어요',
          '올바른 URL로 Send했을 때 <strong>200 OK</strong>가 보였어요',
          '틀린 URL일 때 <strong>404</strong> 또는 <strong>Could not send request</strong>가 뜬다는 것을 확인했어요',
          '성공 응답 <strong>Body</strong>에 JSON이 보이는 것을 확인했어요',
        ],
      },
      {
        kind: 'tip-box',
        html: '다음 파트(1-7)에서는 같은 <strong>Echo GET 요청</strong>에 <strong>Params</strong> 탭으로 값을 추가하고, URL과 응답이 어떻게 달라지는지 비교해 볼 거예요.<br>1-8에서는 <strong>Echo POST 요청</strong>을 새로 추가합니다.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    brand: VOL01_COVER,
    partNum: '1-6',
    partTitle: '기본 GET 요청 보내기',
    partLabel: 'PART 06 · URL · Send',
  },
  toc: {
    goals: [
      '요청 편집기에서 <strong>Method · URL · Send</strong> 역할을 말할 수 있어요.',
      '<strong>Echo GET 요청</strong>에 URL을 직접 입력하고 Echo에 <strong>GET</strong> 요청을 보낼 수 있어요.',
      '성공(<strong>200 OK</strong>)과 실패(<strong>404</strong> 등) 응답을 구분할 수 있어요.',
    ],
    quote: '이 파트 흐름: Method·URL·Send → URL 읽기 → 실습 · Send → 성공 응답 → 실패 확인',
    flowCards: [
      { title: '요청 보내기', body: 'Method · URL · Send' },
      { title: 'URL', body: '주소 구조 · 입력' },
      { title: '실습 · Send', body: 'Echo GET 요청 · 200 OK' },
      { title: '성공 · 실패', body: 'Body JSON · 404' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-6',
    roadmap: VOL01_ROADMAP,
    ctaTitle: 'Echo GET 요청 Send 완료! 다음은 Params',
    ctaSubtitle: '1-7에서 같은 Echo GET 요청에 Params 탭으로 값을 추가하고, 응답 차이를 비교해 볼 거예요.',
  },
})
