import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { createPartFigFn } from '@shared/guide/part-figures'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import { VOL01_COVER } from '@series/postman/vol-01-start/cover'
import meta from './meta.json'

export const partId = '1-2-signup-login'
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
        label: '회원가입',
        title: 'Sign Up으로 계정을 만들어요',
        lead: '1-1에서 Postman을 연 상태에서 진행해요. 처음이면 <strong>Sign Up</strong>, 계정이 있으면 <strong>Sign In</strong>을 선택해요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '이름·이메일·비밀번호 입력',
            body: 'Sign Up 화면에서 기본 정보를 입력하고 계속 진행해요.',
            figure: fig('01-start-signin.png', 'Sign Up — 이름·이메일·비밀번호 입력'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: '<strong>Google·GitHub로 바로 시작할 수도 있어요.</strong><br>Sign Up 화면에서 <strong>Continue with Google</strong> 또는 <strong>Continue with GitHub</strong>을 누르면 이메일·비밀번호 입력 없이 가입·로그인할 수 있어요.',
      },
      {
        kind: 'tip-box',
        html: '이미 계정이 있나요?<br><strong>Sign In</strong>을 선택하면 로그인만 진행하면 됩니다.<br>별도 캡처 없이도 같은 방식으로 워크스페이스까지 이어져요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '회원가입',
        title: '이메일 인증을 마쳐요',
        lead: '계정 정보를 입력한 뒤, 그 계정을 사용할 수 있는지 확인하는 과정이에요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '이메일로 인증 메일 확인',
            body: '받은 메일을 열어 인증 링크를 누르거나, 안내에 따라 다음 단계로 넘어가요.',
            figure: fig('03-verify-email-1.png', '받은 편지함 — Postman 인증 메일'),
          },
          {
            title: '인증 번호 입력',
            body: '메일에 적힌 인증 번호를 Postman 화면에 입력해요.',
            figure: fig('03-verify-email-2.png', 'Postman — Verify email 화면'),
          },
        ],
      },
      {
        kind: 'warn-box',
        html: '<strong>인증 메일이 안 와요</strong> — 스팸함 확인 → 1~2분 대기 → 재전송. 회사 메일은 IT에 외부 메일 허용을 요청해 보세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '첫 설정',
        title: '워크스페이스 들어가기 전, 짧은 설정이 있어요',
        lead: '가입 정보를 입력하면 이어서 나오는 짧은 설정 화면이에요. 안내에 따라 선택하면 워크스페이스로 들어갑니다.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '사용 목적·역할 선택',
            body: '팀 규모·역할 등 기본 정보를 고르는 첫 설정 화면이에요.',
            figure: fig('04-Initial setup-1.png', 'Initial setup — 사용 목적·역할 선택'),
          },
          {
            title: '추가 설정 선택',
            body: '이어서 나오는 항목을 선택하고 다음으로 진행해요. 끝나면 워크스페이스로 들어갑니다.',
            figure: fig('04-Initial setup-2.png', 'Initial setup — 추가 설정'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: '설정이 끝나면 Postman이 워크스페이스와 샘플 API 요청을 자동으로 만들어 줄 수 있어요.<br>잠시 후 다음 페이지처럼 화면이 보이면 정상이에요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '화면 구성',
        title: '로그인 후 워크스페이스 화면을 훑어봐요',
        lead: '설정이 끝나면 아래처럼 워크스페이스 화면으로 들어옵니다. Vol.2에서는 가운데에서 첫 요청을 보낼 거예요.',
      },
      {
        kind: 'figure',
        figure: fig(
          '05-home-after-login.png',
          '로그인·설정 완료 후 워크스페이스 — 왼쪽 Collection·가운데 작업 영역',
        ),
      },
      {
        kind: 'cards-2',
        cards: [
          {
            lucide: 'folder-open',
            iconBg: '#e0f2fe',
            iconColor: '#0369a1',
            title: '왼쪽 Collections',
            body: '자동 생성된 샘플 요청·Collection이 보일 수 있어요. Vol.2에서 직접 만들기도 합니다.',
          },
          {
            lucide: 'pen-line',
            iconBg: '#fef3c7',
            iconColor: '#b45309',
            title: '가운데 작업 영역',
            body: '요청 URL·Send 버튼이 있는 곳이에요. API를 보내는 핵심 공간입니다.',
          },
          {
            lucide: 'building-2',
            iconBg: '#ede9fe',
            iconColor: '#6d28d9',
            title: '상단 Workspace 이름',
            body: '지금 쓰는 작업 공간이에요. 1-3에서 내 Workspace를 정리해 봅니다.',
          },
          {
            lucide: 'user-circle',
            iconBg: '#dcfce7',
            iconColor: '#15803d',
            title: '우측 상단 계정',
            body: '로그인한 계정이 보이면 회원가입·로그인 흐름이 끝난 상태예요.',
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
        title: '이렇게 보이면 1-2 완료예요',
        lead: '아래를 모두 확인했으면 다음 파트(Workspace)로 넘어가도 됩니다.',
      },
      {
        kind: 'check-done',
        items: [
          'Sign Up 또는 Sign In을 마쳤다',
          '이메일 인증·첫 설정(Initial setup)을 끝냈다',
          '워크스페이스 화면에서 Collections·작업 영역을 찾을 수 있다',
          '왼쪽에 샘플 API 요청이 보여도 정상이다 (자동 생성)',
        ],
      },
      {
        kind: 'tip-box',
        html: '화면이 잠깐 비어 보이면 10~20초만 기다려 보세요.<br>동기화가 끝나면 메뉴와 샘플 요청이 채워집니다.',
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    brand: VOL01_COVER,
    partNum: '1-2',
    partTitle: 'Postman 시작하기',
    partLabel: 'PART 02 · 시작하기',
  },
  toc: {
    goals: [
      'Sign Up 또는 Sign In으로 계정을 연결할 수 있어요.',
      '이메일 인증·첫 설정(Initial setup)을 마칠 수 있어요.',
      '워크스페이스 화면의 주요 영역을 구분할 수 있어요.',
    ],
    quote: '이 파트 흐름: 회원가입·인증 → 첫 설정 → 화면 구성',
    flowCards: [
      { title: '회원가입', body: '정보 입력 · Google/GitHub 로그인' },
      { title: '이메일 인증', body: '인증 메일 · 인증 번호' },
      { title: '첫 설정', body: 'Initial setup' },
      { title: '화면 구성', body: '워크스페이스 · 주요 영역' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-2',
    roadmap: VOL01_ROADMAP,
    ctaTitle: '시작하기 완료! 다음은 Workspace',
    ctaSubtitle: '1-3에서 내 Workspace를 정리해 볼 거예요.',
  },
})
