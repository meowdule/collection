import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import meta from './meta.json'

export const partId = '1-3-web-install'
export { meta }

const partImages = import.meta.glob<string>('./images/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

function fig(file: string, caption: string): FigureSlot {
  const key = `./images/${file}`
  const imageSrc = partImages[key]
  if (!imageSrc) {
    return {
      placeholderCode: `images/${file}`,
      placeholderLabel: `이미지 없음: ${file}`,
      caption,
    }
  }
  return { imageSrc, caption }
}

const body: ContentPageData[] = [
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '기본 세팅',
        title: '처음 한 번만 확인해두면 좋은 것들',
        lead: '설정을 바꾸지 않아도 실습은 진행할 수 있어요. 화면이 달라 보일 때 참고하세요.',
      },
      {
        kind: 'tip-box',
        html: 'Postman은 한글을 지원하지 않아요. 모든 메뉴·버튼이 영문으로 표시되는 게 정상이에요.',
      },
      {
        kind: 'warn-box',
        html: '자료집 스크린샷과 화면 색이 다르게 보이면 테마 차이예요. Settings → Themes에서 Light / Dark를 바꿀 수 있어요. 실습 내용은 테마와 관계없이 동일해요.',
      },
      {
        kind: 'figure',
        figure: fig('00. init setting (2).png', '기본 세팅 — Themes에서 Light / Dark 변경'),
      },
      {
        kind: 'tip-box',
        html: '<strong>요청은 자동으로 저장돼요.</strong><br>별도 저장 버튼 없이 Postman이 자동으로 보관해요. 실수로 창을 닫아도 내용이 남아 있어요.',
      },
      {
        kind: 'tip-box',
        html: '가입 후 샘플 Collection이 자동으로 생성돼 있을 수 있어요. 열어서 둘러봐도 좋고, 필요 없으면 삭제해도 돼요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'Workspace 개념',
        title: 'Workspace가 뭔가요',
      },
      {
        kind: 'key-box',
        headline: '요청·Collection을 담아두는 내 작업 공간이에요.',
        body: '프로젝트마다 Workspace를 하나씩 만들어 쓰는 게 일반적이에요. 요청·변수·환경 설정이 모두 Workspace 안에 저장돼요.',
      },
      {
        kind: 'pain-rows',
        items: [
          {
            title: '프로젝트별로 분리해서 관리할 수 있어요',
            body: '프로젝트 A · 프로젝트 B 요청이 섞이지 않아요. 테스트용과 실무용도 Workspace로 나눠 두면 깔끔해요.',
          },
          {
            title: '팀과 공유하거나 혼자만 쓸 수 있어요',
            body: 'Personal은 나만 보이고, Team은 팀원과 함께 써요. 지금은 Personal로 시작하고, 필요해지면 나중에 전환할 수 있어요.',
          },
        ],
      },
      {
        kind: 'split-2',
        left: {
          title: '👤 Personal',
          body: '나 혼자 쓰는 공간, 팀원에게 공개되지 않음, 지금 만들 유형',
          variant: 'app',
        },
        right: {
          title: '👥 Team',
          body: '팀원과 함께 쓰는 공간, 나중에 필요해지면 전환 가능',
          variant: 'post',
        },
      },
      {
        kind: 'tip-box',
        html: '지금은 Personal로 만들어요. 팀 공유가 필요해지면 나중에 Team Workspace로 전환할 수 있어요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '만들기',
        title: '새 Workspace를 만들어요',
        lead: '스크린샷을 보면서 같은 화면을 찾아 따라하세요.',
      },
      {
        kind: 'steps',
        startAt: 1,
        steps: [
          {
            title: 'Create 버튼 클릭',
            body: '워크스페이스 생성 화면으로 들어가기 위해 <strong>Create</strong> 버튼을 눌러요.',
            figure: fig('01.create-workspace (1).png', 'Workspace 생성 시작 — Create 버튼 클릭'),
          },
          {
            title: '이름 입력 · Visibility Personal 선택',
            body: 'Workspace 이름을 입력하고 Visibility에서 <strong>Personal</strong>을 선택해요.',
            figure: fig('01.create-workspace (2).png', 'Workspace 이름·공개 범위(Visibility) 설정'),
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
            title: 'Create 클릭 → 상단에 새 이름 확인',
            body: '<strong>Create</strong>를 누른 뒤 상단 Workspace 이름이 새로 만든 이름으로 바뀌었는지 확인해요.',
            figure: fig('01.create-workspace (3).png', '새 Workspace 생성 완료 — 상단 이름 확인'),
          },
        ],
      },
      {
        kind: 'warn-box',
        html: 'Visibility를 Team으로 설정하면 팀원에게 공개돼요. 지금은 반드시 Personal을 선택하세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 1-3 완료예요',
        lead: '아래를 모두 확인했으면 다음 파트(1-4)로 넘어가도 됩니다.',
      },
      {
        kind: 'check-done',
        items: [
          '상단에 내가 만든 Workspace 이름이 표시돼요',
          '상단 Workspace 이름을 클릭해서 목록을 전환할 수 있어요',
          '언어·테마·자동 저장·샘플 Collection 관련 기본 세팅을 확인했어요',
        ],
      },
      {
        kind: 'tip-box',
        html: 'Workspace 이름은 나중에 언제든 바꿀 수 있어요. 지금은 대충 정해도 괜찮아요.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    badges: ['Postman 사용법 자료집', 'Vol.1 Postman 입문'],
    warmBadge: '1-3',
    partLabel: 'PART 03 · Workspace',
    titleLines: ['Workspace', '만들기'],
    leadLines: [
      '내 작업 공간을 만들고',
      '기본 세팅을 확인해요',
    ],
  },
  toc: {
    goals: [
      'Workspace가 무엇인지, <strong>Personal과 Team의 차이</strong>를 알아요.',
      '새 Workspace를 <strong>직접 만들</strong> 수 있어요.',
      '언어·테마·자동 저장 등 <strong>기본 세팅</strong>을 확인했어요.',
    ],
    quote: '이 파트 흐름: 기본 세팅 → Workspace 개념 → 새로 만들기',
    flowCards: [
      { title: '기본 세팅', body: '언어 · 테마 · 자동 저장 · 샘플 Collection' },
      { title: 'Workspace 개념', body: 'Personal · Team 차이 · 실무 활용' },
      { title: '새로 만들기', body: '이름 · Visibility · Create' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-3',
    roadmap: VOL01_ROADMAP,
    ctaTitle: 'Workspace 완료! 다음은 실습 파일 준비',
    ctaSubtitle: '1-4에서 Collection.json Import와 Mock Server를 확인해요.',
  },
})