import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import { VOL01_ROADMAP, VOL01_ROADMAP_SECTION_LABEL } from '@series/postman/roadmap'
import meta from './meta.json'

export const partId = '1-2-signup-login'
export { meta }

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
        label: '웹으로 열기',
        title: 'postman.com에 접속해요',
        lead: '설치 없이 브라우저에서 바로 시작할 수 있어요. Chrome, Edge 등 최신 브라우저를 사용하세요.',
      },
      {
        kind: 'key-box',
        headline: 'https://www.postman.com/',
        body: '검색창에서 찾으면 광고 링크가 섞일 수 있어요. 위 주소를 주소창에 직접 붙여 넣으세요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '브라우저 주소창에 postman.com 입력',
            body: '브라우저 주소창에 <strong>postman.com</strong>을 입력하고 Enter를 눌러요.',
            figure: fig('images/01-postman-home.png', 'Postman 홈 화면 — Sign Up · Sign In 버튼이 보이는 화면'),
          },
          {
            title: '화면 확인',
            body: 'Sign Up 또는 Sign In 버튼이 보이면 정상이에요. 계정이 없으면 아래 회원가입 단계로, 이미 있으면 로그인 단계로 넘어가세요.',
            figure: fig('images/02-signup-signin-closeup.png', 'Sign Up · Sign In 버튼 클로즈업'),
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
        label: '회원가입',
        title: '계정 만들기',
        lead: '이미 Postman 계정이 있다면 이 페이지는 건너뛰고 로그인 단계로 넘어가세요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'Sign Up 클릭',
            body: '홈 화면에서 <strong>Sign Up</strong> 버튼을 클릭해요.',
            figure: fig('images/03-signup-button.png', 'Sign Up 버튼'),
          },
          {
            title: '이메일·비밀번호 입력',
            body: '사용할 이메일 주소와 비밀번호를 입력해요. 회사 계정 정책이 있다면 그 정책에 맞춰서 입력하세요.',
            figure: fig('images/04-email-password-form.png', '이메일·비밀번호 입력 폼'),
          },
          {
            title: '인증 메일 확인',
            body: '입력한 메일함에서 Postman 인증 메일을 열고 <strong>Verify</strong> 버튼을 클릭해요. 메일이 안 보이면 스팸함도 확인하세요.',
            figure: fig('images/05-verify-email.png', '인증 메일 예시 — Verify 버튼'),
          },
        ],
      },
      {
        kind: 'warn-box',
        html: '<strong>인증 메일이 안 와요</strong> — 스팸함 확인 → 1~2분 기다리기 → 재전송 버튼이 있으면 눌러보기. 그래도 안 오면 회사 메일 보안 설정으로 외부 인증 메일이 차단된 경우일 수 있어요. IT 담당자에게 문의하세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '로그인',
        title: '계정으로 로그인하기',
        lead: '이메일 또는 Google 계정으로 로그인할 수 있어요. 어느 쪽이든 로그인 후 화면은 동일해요. 방금 회원가입을 했다면 인증(Verify) 완료 후 여기에서 Sign In만 해주면 돼요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'Sign In 클릭',
            body: '홈 화면에서 <strong>Sign In</strong> 버튼을 클릭해요.',
            figure: fig('images/06-signin-button.png', 'Sign In 버튼'),
          },
          {
            title: '로그인 방식 선택',
            body: '이메일로 가입했다면 이메일·비밀번호를 입력해요. Google 계정으로 로그인하려면 <strong>Continue with Google</strong>을 클릭하고 계정을 선택해요.',
            figure: fig('images/07-login-methods.png', '로그인 방식 선택 화면 — 이메일 입력 또는 Google 버튼'),
          },
          {
            title: '로그인 완료 후 홈 화면 확인',
            body: '로그인이 완료되면 Postman 홈 화면으로 이동해요. 왼쪽 메뉴와 가운데 작업 공간이 보이면 정상이에요.',
            figure: fig('images/08-home-after-login.png', '로그인 후 홈 화면'),
          },
        ],
      },
      {
        kind: 'tip-box',
        html: 'Google 계정이 여러 개라면 로그인 창에서<br>사용할 계정을 정확히 선택하세요.<br>나중에 계정을 바꾸려면 로그아웃 후 다시 로그인해야 해요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 완료예요',
        lead: '로그인 후 아래와 비슷한 화면이 보이면 1-2는 끝난 거예요.',
      },
      {
        kind: 'figure',
        figure: fig('images/09-home-final-check.png', '로그인 후 Postman 홈 화면 전체 — 왼쪽 메뉴 + 가운데 작업 공간'),
      },
      {
        kind: 'check-done',
        items: [
          '왼쪽에 메뉴(Collections, Environments 등)가 보인다',
          '오른쪽 상단 또는 프로필 영역에 내 계정 이름·아이콘이 보인다',
          '가운데 작업 공간이 열려 있다 (비어 있어도 괜찮아요)',
        ],
      },
      {
        kind: 'tip-box',
        html: '로그인 직후 동기화가 진행되면서 잠깐 느릴 수 있어요. 10~20초 정도 기다리면 메뉴가 나타나요.',
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
      'Postman을 열고 계정을 연결해요',
      'postman.com에 접속해서 계정을 만들거나 로그인하고, 첫 화면까지 확인해요',
    ],
  },
  toc: {
    goals: [
      'postman.com에 접속해서 Postman 화면을 열 수 있어요.',
      '이메일 또는 Google 계정으로 로그인할 수 있어요.',
      '로그인 후 홈 화면이 정상적으로 보이는지 확인했어요.',
    ],
    quote: '이 파트 흐름: 웹으로 열기 → 회원가입 → 로그인 → 홈 화면 확인',
    flowCards: [
      { title: '웹으로 열기', body: 'postman.com 접속 · Sign Up/Sign In 확인' },
      { title: '회원가입', body: 'Sign Up · 이메일 인증' },
      { title: '로그인', body: '이메일 또는 Google 로그인' },
      { title: '홈 화면 확인', body: '왼쪽 메뉴 · 가운데 작업 공간 확인' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    currentPartNum: '1-2',
    roadmap: VOL01_ROADMAP,
    ctaTitle: '계정 연결 완료! 다음은 화면 익히기',
    ctaSubtitle: '1-3에서 Postman 화면 각 부분이 뭔지 살펴볼 거예요.',
  },
})
