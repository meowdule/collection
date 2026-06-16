import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { createPartFigure } from '@shared/guide/part-figures'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import { VOL01_COVER } from '@series/postman/vol-01-start/cover'
import { VOL01_PRACTICE_ECHO_BASE } from '@series/postman/vol-01-start/practice-collection'
import meta from './meta.json'

export const partId = '1-7-query-params'
export { meta }

const GET_ECHO_URL = `${VOL01_PRACTICE_ECHO_BASE}/get`
const GET_ECHO_URL_WITH_NAME = `${GET_ECHO_URL}?name=kim`

const partImages = import.meta.glob<string>('./images/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function fig(file: string, caption: string): FigureSlot {
  return createPartFigure(partImages, file, caption)
}

const body: ContentPageData[] = [
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'Query Params',
        title: 'Query Params가 뭔가요',
        lead: '1-6에서 보낸 <strong>Echo GET 요청</strong>에 값을 하나 더 붙여 볼 거예요.',
      },
      {
        kind: 'key-box',
        headline: 'URL 뒤에 <strong>?이름=값</strong> 형태로 붙는 추가 정보예요.',
        body: '브라우저 주소창의 <code>?tab=news</code> 같은 부분과 같아요.<br>서버에 “이 조건으로 데이터를 달라”고 알려 줄 때 씁니다.',
      },
      {
        kind: 'code-block',
        caption: '1-6 vs 1-7 — URL 비교',
        code: `1-6  ${GET_ECHO_URL}
1-7  ${GET_ECHO_URL_WITH_NAME}
           └ Query Param: name=kim`,
      },
      {
        kind: 'split-2',
        left: {
          title: '✏️ URL에 직접',
          body: '주소 끝에 <code>?name=kim</code> 입력',
          items: ['짧을 때는 가능', '값이 많아지면 관리가 어려움'],
          variant: 'app',
        },
        right: {
          title: '📋 Params 탭',
          body: 'Key · Value 표로 입력',
          items: ['Postman이 URL에 자동 반영', '이번 파트에서 사용'],
          variant: 'post',
        },
      },
      {
        kind: 'tip-box',
        html: 'Environment·변수(<code>{{변수명}}</code>)는 <strong>1-9 · 1-10</strong>에서 다룹니다. 지금은 Params 탭만 사용해요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '응답',
        title: 'Echo는 Params를 어떻게 돌려주나요',
        lead: '1-6에서는 Body의 <code>args</code>가 비어 있었어요. Params를 넣으면 여기에 값이 채워집니다.',
      },
      {
        kind: 'code-block',
        caption: '1-6 응답 — args 비어 있음',
        code: `{
  "args": {},
  "url": "${GET_ECHO_URL}"
}`,
      },
      {
        kind: 'code-block',
        caption: '1-7 응답 — args에 name=kim',
        code: `{
  "args": {
    "name": "kim"
  },
  "url": "${GET_ECHO_URL_WITH_NAME}"
}`,
      },
      {
        kind: 'key-box',
        headline: '확인 포인트는 두 가지예요.',
        body: '① URL에 <code>?name=kim</code>이 붙었는지 · ② Body <code>args</code>에 <code>"name": "kim"</code>이 보이는지',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '실습',
        title: 'Echo GET 요청에 Params 추가해요',
        lead: '<strong>내 연습 Collection</strong> → <strong>Echo GET 요청</strong>을 열어요. 1-6에서 URL을 넣어 둔 그 요청입니다.',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: 'Echo GET 요청 열기',
            body: `Collections → <strong>내 연습 Collection</strong> → <strong>Echo GET 요청</strong>을 선택해요.<br>URL이 <code>${GET_ECHO_URL}</code>인지 확인해요.`,
            figure: fig('01-open-echo-get.png', 'Echo GET 요청 — Collections 트리'),
          },
          {
            title: 'Params 탭 · Key · Value 입력',
            body: '<strong>Params</strong> 탭을 열고 첫 줄에 Key <strong>name</strong> · Value <strong>kim</strong>을 입력해요.<br>체크박스가 켜져 있어야 URL에 반영됩니다.',
            figure: fig('02-params-tab.png', 'Params — name · kim'),
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
            title: 'URL 반영 · Send',
            body: `URL 칸 끝에 <code>?name=kim</code>이 붙었는지 확인한 뒤 <strong>Send</strong>를 눌러요.`,
            figure: fig('03-url-with-params.png', 'URL — postman-echo.com/get?name=kim'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: 'Params를 지우거나 체크를 끄면 URL에서 <code>?name=kim</code>이 사라져요. 다시 켜고 Send하면 동일하게 동작합니다.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '응답에서 Params 결과 보기',
        lead: '200 OK가 나온 뒤 Body를 확인해요.',
      },
      {
        kind: 'cards-2',
        cards: [
          {
            lucide: 'globe',
            iconBg: '#e0f2fe',
            iconColor: '#0369a1',
            title: 'url',
            body: `Body의 <code>url</code>에 <strong>${GET_ECHO_URL_WITH_NAME}</strong>이 보여요`,
          },
          {
            lucide: 'file-code',
            iconBg: '#dcfce7',
            iconColor: '#15803d',
            title: 'args',
            body: 'Body의 <code>args</code>에 <strong>"name": "kim"</strong>이 보여요',
          },
        ],
      },
      {
        kind: 'figure',
        figure: fig('04-response-args.png', 'Body JSON — args.name = kim'),
      },
      {
        kind: 'warn-box',
        html: '<code>args</code>가 비어 있으면 Params 체크·Key·Value 철자를 다시 확인하세요. Value에 공백이 들어가지 않았는지도 봐요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '완료',
        title: '이렇게 보이면 1-7 완료예요',
        lead: '아래를 모두 확인했으면 다음 파트(1-8)로 넘어가도 됩니다.',
      },
      {
        kind: 'check-done',
        items: [
          'Query Params가 URL 뒤 <strong>?이름=값</strong> 형태라는 것을 알고 있어요',
          '<strong>Echo GET 요청</strong>의 <strong>Params</strong> 탭에 <strong>name · kim</strong>을 넣었어요',
          'Send 후 URL에 <code>?name=kim</code>이 붙은 것을 확인했어요',
          '응답 Body <code>args</code>에 <strong>"name": "kim"</strong>이 보였어요',
          '1-6(<code>args: {}</code>)과 1-7(<code>args</code>에 값)의 차이를 말할 수 있어요',
        ],
      },
      {
        kind: 'tip-box',
        html: '다음 파트(1-8)에서는 <strong>내 연습 Collection</strong>에 <strong>Echo POST 요청</strong>을 새로 추가하고, Body 탭으로 JSON을 보내 볼 거예요.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    brand: VOL01_COVER,
    partNum: '1-7',
    partTitle: 'Query Params 요청 보내기',
    partLabel: 'PART 07 · Params',
  },
  toc: {
    goals: [
      'Query Params가 <strong>무엇인지</strong> 말할 수 있어요.',
      '<strong>Params</strong> 탭으로 값을 넣고 URL·응답 변화를 확인할 수 있어요.',
      '1-6과 비교해 <code>args</code>에 값이 채워지는 것을 확인할 수 있어요.',
    ],
    quote: '이 파트 흐름: Params 개념 → Echo 응답 비교 → 실습 · Send → args 확인',
    flowCards: [
      { title: 'Query Params', body: '?name=kim · Params 탭' },
      { title: '응답 비교', body: 'args {} vs name=kim' },
      { title: '실습', body: 'Echo GET 요청 · Send' },
      { title: '확인', body: 'URL · args · 1-8 예고' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-7',
    roadmap: VOL01_ROADMAP,
    ctaTitle: 'Params 완료! 다음은 POST Body',
    ctaSubtitle: '1-8에서 Echo POST 요청을 새로 만들고 Body 탭으로 JSON을 보내 볼 거예요.',
  },
})
