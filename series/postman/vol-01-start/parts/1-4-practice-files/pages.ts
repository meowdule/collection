import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { createPartFigFn } from '@shared/guide/part-figures'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import { VOL01_COVER } from '@series/postman/vol-01-start/cover'
import {
  VOL01_PRACTICE_COLLECTION,
  VOL01_PRACTICE_ECHO_BASE,
  VOL01_PRACTICE_MIRROR,
} from '@series/postman/vol-01-start/practice-collection'
import meta from './meta.json'

export const partId = '1-4-practice-files'
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
        label: '실습 Collection',
        title: 'Collection 파일이 뭔가요',
        lead: '1-3에서 만든 Workspace에 실습용 요청 묶음을 가져올 거예요.',
      },
      {
        kind: 'key-box',
        headline: 'Postman에서 만든 요청·폴더를 파일 하나로 묶어 둔 실습 세트예요.',
        body: '강사가 미리 만들어 두면, 학습자는 파일을 받아 <strong>Import</strong> 한 번으로 Workspace에 넣을 수 있어요.<br>Vol.1 실습은 모두 <strong>Postman Echo</strong>로 진행합니다 — 실제 서버가 아니라 연습용 응답 서버예요.',
      },
      {
        kind: 'split-2',
        left: {
          title: '📁 Collection 파일',
          body: '요청·폴더가 담긴 .json 파일',
          items: [
            '확장자: <strong>.json</strong>',
            'Import로 Workspace에 추가',
          ],
          variant: 'app',
        },
        right: {
          title: '🌐 Postman Echo',
          body: 'Vol.1 전체 실습 API',
          items: [
            `기본 주소: <strong>${VOL01_PRACTICE_ECHO_BASE}</strong>`,
            '1-6 GET · 1-7 Params · 1-8 POST',
          ],
          variant: 'post',
        },
      },
      {
        kind: 'tip-box',
        html: 'Vol.1 실습은 <strong>Postman Echo</strong>로 요청 보내기·응답 확인을 연습합니다.<br>Environment·변수(<code>{{변수명}}</code>)는 <strong>1-9 · 1-10</strong>에서 처음 다룹니다.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '다운로드',
        title: '실습 Collection 받기',
        lead: `자료집 배포 레포(<strong>${VOL01_PRACTICE_MIRROR.repo}</strong>)에서 Collection JSON을 받아요.`,
      },
      {
        kind: 'link-list',
        links: [
          {
            label: VOL01_PRACTICE_COLLECTION.fileName,
            url: VOL01_PRACTICE_COLLECTION.downloadUrl,
            hint: '우클릭 → 다른 이름으로 저장 (또는 링크 열기 후 저장)',
          },
        ],
      },
      {
        kind: 'text',
        text: `배포 주소: <a href="${VOL01_PRACTICE_MIRROR.pagesBase}" target="_blank" rel="noopener noreferrer">${VOL01_PRACTICE_MIRROR.pagesBase}</a>`,
      },
      {
        kind: 'tip-box',
        html: '파일을 못 받으면 자료집 담당자에게 <strong>Vol.1 실습 Collection JSON</strong>을 요청하세요.',
      },
      {
        kind: 'section-header',
        label: 'Import',
        title: 'Collection을 Postman에 가져와요',
        lead: '1-3에서 만든 Workspace가 선택된 상태에서 진행해요.',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: 'Import 버튼 클릭',
            body: '좌측 상단 <strong>Import</strong>를 눌러요.',
            figure: fig('01-import-button.png', 'Import 버튼 — 좌측 상단'),
          },
          {
            title: '파일 업로드',
            body: `<strong>Upload Files</strong> 탭에서 방금 저장한 <strong>${VOL01_PRACTICE_COLLECTION.fileName}</strong>을 선택하거나 끌어다 놓아요.`,
            figure: fig('02-import-upload.png', 'Import — Upload Files · JSON 선택'),
          },
          {
            title: 'Import 확인',
            body: '<strong>Import</strong>를 누른 뒤, 왼쪽 Collections에 <strong>Vol.1 실습 Collection</strong>이 보이면 성공이에요.',
            figure: fig('03-collection-tree.png', 'Import 완료 — Vol.1 실습 Collection'),
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
        label: '연결 확인',
        title: 'Echo 요청으로 확인해요',
        lead: 'Import 직후, Postman이 Echo에 요청을 보내고 응답을 받을 수 있는지 확인해요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'GET Echo 테스트 열기',
            body: 'Collections → <strong>Vol.1 실습 Collection</strong> → <strong>연결 테스트</strong> → <strong>GET Echo 테스트</strong>를 선택해요.',
          },
          {
            title: 'Send → 200 확인',
            body: '<strong>Send</strong>를 누르면 아래 Response에 <strong>200 OK</strong>와 JSON이 보여요.<br>200 OK가 보이면 Postman이 정상적으로 요청을 보내고 응답을 받을 수 있는 상태예요.',
            figure: fig('04-echo-response.png', 'GET Echo 테스트 — 200 OK · JSON 응답'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: `Echo(<code>postman-echo.com</code>)는 Postman이 제공하는 공개 테스트 서버예요.<br>보낸 요청 내용을 응답에 그대로 돌려주므로, Vol.1 실습(1-6 GET · 1-7 Params · 1-8 POST)에 적합합니다.`,
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 1-4 완료예요',
        lead: '아래를 모두 확인했으면 다음 파트(1-5)로 넘어가도 됩니다.',
      },
      {
        kind: 'check-done',
        items: [
          `${VOL01_PRACTICE_COLLECTION.fileName}을 다운로드하고 Import했어요`,
          'Collections에 <strong>Vol.1 실습 Collection</strong>이 보여요',
          '<strong>GET Echo 테스트</strong> Send → 200 OK를 확인했어요',
          '앞으로의 GET · Params · POST 실습이 <strong>Postman Echo</strong>로 진행된다는 것을 알고 있어요',
        ],
      },
      {
        kind: 'tip-box',
        html: '가져온 Collection은 <strong>1-6~1-8 실습용</strong>이에요.<br>1-5에서는 Collection이 무엇인지 정리하고, <strong>직접 새 Collection</strong>을 만들어 봅니다.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    brand: VOL01_COVER,
    partNum: '1-4',
    partTitle: '실습 Collection 가져오기',
    partLabel: 'PART 04 · 실습 Collection',
  },
  toc: {
    goals: [
      'Collection 파일이 <strong>무엇인지</strong> 말할 수 있어요.',
      '배포 레포에서 JSON을 받아 <strong>Import</strong>할 수 있어요.',
      'Postman Echo 요청으로 <strong>요청·응답이 되는지</strong> 확인할 수 있어요.',
    ],
    quote: '이 파트 흐름: Collection 소개 · Echo 안내 → 다운로드 · Import → Echo 확인',
    flowCards: [
      { title: 'Collection 파일', body: 'Echo 기반 실습 세트' },
      { title: '다운로드', body: 'TBELL-ref/collection JSON' },
      { title: 'Import', body: 'Upload · Collection 추가' },
      { title: 'Echo 확인', body: 'Send · 200 OK' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-4',
    roadmap: VOL01_ROADMAP,
    ctaTitle: '실습 Collection 준비 완료! 다음은 Collection 구조 이해하기',
    ctaSubtitle:
      '1-5에서 Collection이 무엇인지 정리하고, 직접 새 Collection을 만들어 볼 거예요.',
  },
})
