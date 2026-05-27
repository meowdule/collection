import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import meta from './meta.json'

export const partId = '1-2-signup-login'
export { meta }

const VOL1_ROADMAP = [
  { num: '1-1', label: 'Postman이 뭔가요' },
  { num: '1-2', label: '회원가입 & 로그인' },
  { num: '1-3', label: '웹 실행 및 앱 설치' },
  { num: '1-4', label: '화면 보기 및 Workspace 생성' },
]

function fig(code: string, caption: string): FigureSlot {
  return {
    placeholderCode: code,
    placeholderLabel: '스크린샷 첨부 요청',
    caption,
  }
}

const body: ContentPageData[] = [
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '먼저 체크',
        title: '이번 단계에서 할 일',
      },
      {
        kind: 'key-box',
        headline: '이번 단계에서는 Postman 계정을 만들고 로그인합니다.',
        body: '로그인 후에는 <strong>Collection 저장</strong>, <strong>환경 동기화</strong>, <strong>팀 공유</strong> 기능을 사용할 수 있어요.',
      },
      {
        kind: 'split-2',
        left: {
          title: '이메일로 회원가입',
          body: '회사 이메일로 계정을 만들고 인증 메일 확인까지 진행합니다.',
          variant: 'app',
        },
        right: {
          title: 'Google 계정으로 로그인',
          body: 'Google 로그인 창에서 회사 계정을 선택해 바로 로그인할 수 있어요.',
          variant: 'post',
        },
      },
      {
        kind: 'tip-box',
        html: '<strong>안내.</strong> 회사에서 사용하는 계정 정책이나 SSO가 있다면 회사 안내를 우선하세요.<br>인증 메일이 보이지 않으면 스팸함 또는 프로모션함도 확인해보세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'STEP 1',
        title: '계정 만들기 (이메일 기준)',
        lead: '이미 계정이 있다면 아래 로그인 섹션으로 넘어가도 됩니다.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'Postman 실행 후 Sign up 선택',
            body: '첫 화면에서 <strong>Sign up</strong> 또는 <strong>Create account</strong> 버튼을 찾습니다.',
            figure: fig('images/01-start-signup.png', '첫 실행 화면 — Sign up 버튼이 보이는 화면'),
          },
          {
            title: '이메일/비밀번호 입력',
            body: '회사에서 사용할 이메일을 입력하고 비밀번호를 설정합니다. (팀 정책이 있으면 그 정책에 맞춰요.)',
            figure: fig('images/02-signup-form.png', 'Sign up 입력 폼 — Email / Password'),
          },
          {
            title: '인증 메일 확인',
            body: '메일함에서 인증 메일을 열고 <strong>Verify</strong> 버튼을 눌러 인증합니다. 스팸함도 확인하세요.',
            figure: fig('images/03-verify-email.png', '인증 메일 예시 — Verify 버튼'),
          },
        ],
      },
      {
        kind: 'warn-box',
        html: '<strong>인증 메일이 안 와요</strong> — 스팸함 확인 → 1~2분 기다리기 → “재전송” 버튼이 있으면 눌러보기 → 그래도 안 되면 IT에 메일 보안 정책 확인 요청.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'STEP 2',
        title: '로그인하기 (이메일 / Google)',
        lead: '회사에서는 Google 계정 또는 SSO가 더 흔할 수 있어요. 화면에 보이는 옵션 기준으로 선택하면 됩니다.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'Sign in 선택',
            body: '첫 화면 또는 우측 상단에서 <strong>Sign in</strong> 버튼을 찾습니다.',
            figure: fig('images/04-start-signin.png', 'Sign in 진입 화면'),
          },
          {
            title: '로그인 방식 선택',
            body: '<strong>Email</strong>: 이메일/비밀번호로 로그인 · <strong>Google</strong>: Google 로그인 창이 뜨면 회사 계정을 선택',
            figure: fig('images/05-signin-methods.png', 'Sign in 옵션 화면 (Email / Google 등)'),
          },
          {
            title: '로그인 완료 후 홈 화면 확인',
            body: '왼쪽에 메뉴, 중앙에 작업 영역이 보이면 정상입니다. “Workspace” 또는 “Collections” 메뉴가 보이는지 확인해요.',
            figure: fig('images/06-home-after-login.png', '로그인 후 홈 화면(좌측 메뉴 + 중앙 작업 영역)'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: '<strong>Tip.</strong> 로그인 후 동기화가 진행되면서 잠시 느릴 수 있어요. 10~20초 정도 기다렸다가 메뉴가 나타나는지 확인해요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '문제 해결',
        title: '자주 막히는 경우',
      },
      {
        kind: 'cards-2',
        cards: [
          { title: '인증 메일이 안 와요', body: '스팸함 확인 → 재전송 → 회사 메일 보안 정책(외부 인증 메일 차단) 여부 확인.' },
          { title: '회사 계정으로 Google 로그인 안 돼요', body: '브라우저에 로그인된 계정이 여러 개면 헷갈릴 수 있어요. 회사 계정을 명확히 선택하세요.' },
          { title: '로그인은 됐는데 빈 화면이에요', body: '앱 재시작 후 다시 확인. 그래도 이상하면 업데이트 후 재실행을 권장합니다.' },
          { title: '회사에서 외부 서비스 가입이 금지예요', body: '팀 정책에 따라 “공용 계정”을 쓰거나, IT에서 허용한 SSO 방식으로 진행해야 할 수 있어요.' },
        ],
      },
      {
        kind: 'section-header',
        label: '다음 준비',
        title: '로그인 후 딱 이것만 확인하세요',
      },
      {
        kind: 'check-done',
        items: [
          '좌측에 <strong>Collections</strong> 또는 비슷한 메뉴가 보인다',
          '우측 상단(또는 프로필)에서 <strong>로그인 상태</strong>를 확인할 수 있다',
          '홈에서 “Create Workspace” 또는 “New” 버튼을 찾을 수 있다',
        ],
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    badges: ['Postman 사용법 자료집', 'Vol.1 설치 및 시작하기'],
    warmBadge: '1-2',
    partLabel: 'PART 02 · 계정 연결하기',
    titleLines: ['회원가입 &', '로그인'],
    leadLines: [
      'Postman에서 계정을 만들고 로그인해서,',
      'Workspace와 요청을 안전하게 저장할 준비를 해요.',
    ],
  },
  toc: {
    goals: [
      'Postman에서 <strong>계정을 만들거나</strong> 기존 계정으로 로그인했어요.',
      '로그인 후 <strong>첫 화면(홈/워크스페이스)</strong>이 정상적으로 보여요.',
      '팀에서 공유하는 Collection/Environment를 <strong>가져올 준비</strong>가 됐어요.',
    ],
    quote: '웹 Postman 실행·앱 설치는 1-3에서 이어서 진행합니다. 지금은 계정·로그인만 마치면 됩니다.',
    flowCards: [
      { title: '로그인 필요성', body: '저장·동기화·팀 공유를 위해 계정을 연결해요.' },
      { title: 'STEP 1 · 가입', body: '이메일로 Sign up → 인증 메일 확인.' },
      { title: 'STEP 2 · 로그인', body: 'Email 또는 Google로 Sign in.' },
      { title: '확인', body: '홈 화면·메뉴가 보이면 성공!' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: 'Vol.1 로드맵',
    currentPartNum: '1-2',
    roadmap: VOL1_ROADMAP,
    ctaTitle: '계정 연결 완료! 다음은 Postman 실행',
    ctaSubtitle: '1-3에서 웹 또는 Windows 앱으로 Postman을 실행해 볼 거예요.',
  },
})
