import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import meta from './meta.json'

export const partId = '1-3-web-install'
export { meta }

const VOL1_ROADMAP = [
  { num: '1-1', label: 'Postman이 뭔가요' },
  { num: '1-2', label: '회원가입 & 로그인' },
  { num: '1-3', label: '웹 실행 및 앱 설치' },
  { num: '1-4', label: '화면 구성 살펴보기' },
  { num: '1-5', label: 'Workspace 만들기' },
]

function fig(code: string, caption: string): FigureSlot {
  return {
    placeholderCode: code,
    placeholderLabel: '스크린샷 첨부 요청',
    caption,
  }
}

const body: ContentPageData[] = [
  // ── PAGE 1 : 선택 ──────────────────────────────────────────────
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '시작 전에',
        title: 'Postman, 어떻게 열면 되나요?',
        // [개선] "두 가지로 쓸 수 있다"는 사실보다, 비개발자가 가장 먼저 궁금해하는
        //        "어떻게 여는지"를 전면에 냈어요.
        lead: '설치 없이 브라우저에서 바로 열 수도 있고, PC에 프로그램을 깔아 쓸 수도 있어요. 어느 쪽이든 결과는 같아요 — 지금 상황에 편한 쪽을 고르세요.',
      },
      {
        kind: 'split-2',
        left: {
          title: '🌐 웹에서 바로 열기  ← 일단 이걸 추천해요',
          // [개선] 비개발자에게 웹을 우선 권장. 제목에 직접 명시.
          body: '브라우저에서 <strong>postman.com</strong>에 접속하면 바로 사용할 수 있어요.',
          items: [
            '설치·권한 없이 지금 당장 시작 가능',
            '회사 PC라 프로그램 설치가 안 될 때도 OK',
            '이 자료집의 기본 실습은 웹으로도 충분해요',
          ],
          variant: 'post',
        },
        right: {
          title: '💻 PC 앱 설치하기',
          body: '공식 사이트에서 받아 <strong>Windows PC</strong>에 설치해요.',
          items: [
            '별도 창에서 안정적으로 사용',
            '나중에 고급 실습까지 계속 쓸 예정이라면 추천',
            // [개선] "Collection Runner" 같은 용어 제거. 비개발자에게 의미 없는 단어.
            '웹으로 먼저 익힌 뒤 나중에 설치해도 늦지 않아요',
          ],
          variant: 'app',
        },
        // [개선] 둘 다 해도 된다는 안도감을 더 앞에 배치
        footnote: '💡 지금 바로 결정 안 해도 돼요. <strong>웹으로 먼저 써 보고 → 익숙해지면 앱 설치</strong>하는 순서가 가장 부담 없어요.',
      },
      {
        kind: 'section-header',
        label: '앱 설치 전 확인',
        title: 'PC 앱을 설치하려면 이것만 확인하세요',
        // [개선] "데스크톱 앱 설치 시 확인할 것" → 더 쉬운 표현으로
      },
      {
        kind: 'cards-2',
        cards: [
          {
            title: '인터넷 연결',
            body: '설치 파일을 받을 때 필요해요. 회사 네트워크에서 막히면 IT 담당자에게 문의하세요.',
            // [개선] "보안 정책" 같은 기술 용어 제거
          },
          {
            title: '설치 권한 (회사 PC라면)',
            // [개선] "관리자 권한 (Windows)" → 무슨 권한인지 맥락 추가
            body: '회사 PC는 프로그램 설치에 IT 승인이 필요할 수 있어요. 설치가 안 되면 IT 담당자에게 "Postman 설치 요청"을 해보세요.',
          },
          {
            title: '저장 공간',
            // [개선] "디스크 여유 공간" → 더 일상적인 표현
            body: '대략 1GB 이상 여유가 있으면 충분해요.',
            // [개선] 500MB → 1GB로 현실에 맞게 수정
          },
          {
            title: 'Windows 10 이상',
            body: '이 파트의 설치 안내는 Windows 기준이에요. Mac 사용자는 동일한 다운로드 페이지에서 Mac용 파일을 받으면 돼요.',
            // [개선] "Mac은 추후 보완 예정" 대신 간단한 안내로 대체
          },
        ],
      },
      {
        kind: 'tip-box',
        html: '<strong>Tip.</strong> 1-2에서 로그인을 마쳤다면, 웹과 앱 모두 같은 계정으로 이어져요. 어느 쪽을 열든 내 작업 내용이 그대로 보여요.',
      },
    ],
  },

  // ── PAGE 2 : 경로 A — 웹 ──────────────────────────────────────
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '웹으로 열기',
        // [개선] "경로 A" 라벨 제거 → 독자가 자기 경로를 매번 기억해야 하는 부담 줄임
        title: '브라우저에서 바로 시작하기',
        lead: '설치 없이 지금 바로 할 수 있어요. Chrome·Edge 등 최신 브라우저를 쓰세요.',
      },
      {
        kind: 'key-box',
        headline: 'https://www.postman.com/',
        body: '검색창에서 찾으면 광고 링크가 섞일 수 있어요. 위 주소를 직접 주소창에 붙여 넣으세요.',
        // [개선] "검색 광고 말고" → 왜 직접 입력해야 하는지 이유 추가
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'postman.com 접속',
            body: '브라우저 주소창에 <strong>postman.com</strong>을 입력하고 Enter를 눌러요.',
            figure: fig('images/07-web-home.png', 'Postman 홈 — Launch Postman 또는 Sign In이 보이는 화면'),
          },
          {
            title: 'Postman 열기',
            // [개선] "웹 Postman 실행" → "Postman 열기"로 더 단순하게
            body: '<strong>Launch Postman</strong> 버튼을 클릭해요. 1-2에서 로그인한 상태라면 워크스페이스가 바로 열려요.',
            figure: fig('images/08-web-workspace.png', '브라우저 안 Postman 웹 워크스페이스 화면'),
          },
        ],
      },
      {
        // [신규 추가] 비개발자가 웹에서 가장 많이 막히는 포인트: Agent 없이 로컬 요청 안 됨
        // 단, 이 자료집이 로컬 API 실습을 다루지 않는다면 생략 가능 — 담당자가 판단
        kind: 'tip-box',
        html: '<strong>웹 버전 한 가지 주의.</strong> 회사 내부 시스템(사내망)에 요청을 보내야 한다면, 웹 버전에서는 "Postman Desktop Agent"를 추가 설치해야 할 수 있어요. 화면에 안내가 뜨면 그때 따라하면 되니 지금은 넘어가도 됩니다.',
      },
    ],
  },

  // ── PAGE 3 : 경로 B STEP 1 — 다운로드 ────────────────────────
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'PC 앱 설치 · 1단계',
        // [개선] "경로 B · STEP 1" → 한글로, 어느 단계인지 바로 보이게
        title: '설치 파일 받기',
        lead: 'Windows용 설치 파일을 아래 주소에서 받아요.',
      },
      {
        kind: 'key-box',
        headline: 'https://www.postman.com/downloads/',
        body: '이 주소를 주소창에 직접 입력하세요. 검색 결과 광고 링크는 피하는 게 좋아요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '다운로드 페이지 열기',
            body: '주소창에 <strong>postman.com/downloads</strong>를 입력하고 Enter를 눌러요.',
            figure: fig('images/01-downloads-page.png', 'Postman 다운로드 페이지 — Download 버튼이 보이는 화면'),
          },
          {
            title: 'Windows 다운로드 버튼 클릭',
            // [개선] 파일명 표기는 유지 (실제 파일 찾을 때 도움됨)
            body: '<strong>Download for Windows</strong> 버튼을 클릭하면 파일이 자동으로 받아져요. 파일 이름은 보통 <strong>Postman-win64-Setup.exe</strong> 형태예요.',
            figure: fig('images/02-download-button.png', 'Download for Windows 버튼'),
          },
          {
            title: '파일 확인',
            body: '브라우저 하단 다운로드 표시 또는 <strong>내 PC → 다운로드</strong> 폴더에서 파일을 찾아요.',
            // [개선] "다운로드 막대" → "내 PC → 다운로드 폴더" 경로 추가
            figure: fig('images/03-downloaded-file.png', '다운로드 완료된 설치 파일'),
          },
        ],
      },
    ],
  },

  // ── PAGE 4 : 경로 B STEP 2 — 설치 ────────────────────────────
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: 'PC 앱 설치 · 2단계',
        title: '설치하고 실행하기',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '설치 파일 더블클릭',
            body: '받은 <strong>Postman-win64-Setup.exe</strong> 파일을 더블클릭해요. "이 앱이 기기를 변경하도록 허용하시겠어요?"라는 창이 뜨면 <strong>예</strong>를 눌러요.',
            // [개선] "PC를 변경하도록 허용" → Windows 실제 문구에 맞게 수정
            figure: fig('images/04-win-uac.png', 'Windows 허용 확인 창'),
          },
          {
            title: '자동 설치 진행',
            // [개선] 실제 Postman 설치 방식 반영: 마법사 없이 자동 설치됨
            body: '별도 설치 창 없이 자동으로 설치가 진행돼요. 잠시 기다리면 Postman이 바로 실행됩니다.',
            figure: fig('images/05-win-installing.png', '설치 진행 중 화면'),
          },
          {
            title: '실행 확인',
            body: 'Postman 창이 열리면 설치 완료예요. 바탕화면에 Postman 아이콘이 생겼는지도 확인해 보세요.',
            figure: fig('images/06-win-finish.png', 'Postman 실행 화면 · 바탕화면 아이콘'),
          },
        ],
      },
      {
        kind: 'warn-box',
        // [개선] "VPN·프록시" 같은 기술 용어 제거, IT 문의로 일원화
        html: '<strong>설치가 막히거나 오류가 뜨면</strong> — 회사 보안 설정 때문일 수 있어요. IT 담당자에게 "Postman 설치를 허용해 달라"고 요청하거나, 그 전까지는 <strong>웹 버전으로 먼저 시작</strong>해도 돼요.',
      },
    ],
  },

  // ── PAGE 5 : 확인 ─────────────────────────────────────────────
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 성공이에요',
        lead: '웹이든 앱이든, 아래와 비슷한 화면이 보이면 1-3은 끝난 거예요.',
      },
      {
        kind: 'figure',
        figure: fig('images/09-first-launch.png', 'Postman 첫 화면 — 웹·앱 공통 (워크스페이스)'),
      },
      {
        kind: 'check-done',
        items: [
          'Postman 화면(브라우저 탭 또는 앱 창)이 열렸다',
          '왼쪽 메뉴와 가운데 작업 공간이 보인다 (아무것도 없어도 괜찮아요)',
          '1-2에서 로그인했다면 내 이름이나 Workspace 메뉴가 보인다',
        ],
      },
      {
        kind: 'tip-box',
        // [개선] "업데이트 안내" 설명 — 비개발자가 당황할 수 있는 상황 미리 안내
        html: '<strong>앱을 열자마자 업데이트 안내가 뜨면</strong> "나중에" 또는 "업데이트"를 눌러요. 어느 쪽을 눌러도 Postman은 정상 사용 가능해요.',
      },
    ],
  },

  // ── PAGE 6 : 문제 해결 ───────────────────────────────────────
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '문제 해결',
        title: '잘 안 된다면',
        // [개선] "자주 막히는 경우" → "잘 안 된다면"으로 더 친근하게
      },
      {
        kind: 'cards-2',
        cards: [
          {
            title: '설치 파일이 안 받아져요',
            // [개선] "VPN·프록시를 끄거나" 제거 → IT 문의로 단순화
            body: '회사 네트워크 설정 때문일 수 있어요. IT 담당자에게 "postman.com 접속 허용"을 요청하거나, 당장은 <strong>웹 버전</strong>으로 시작해 보세요.',
          },
          {
            title: '설치했는데 Postman이 안 열려요',
            // [개선] "프로세스 종료" 같은 기술 용어 제거
            body: 'PC를 재시작한 뒤 바탕화면의 Postman 아이콘을 더블클릭해 보세요. 그래도 안 되면 IT 담당자에게 문의하세요.',
          },
          {
            title: '웹이랑 앱, 어떻게 다른가요?',
            body: '기본 실습은 둘 다 똑같이 할 수 있어요. 나중에 좀 더 복잡한 실습을 하게 되면 그때 앱을 설치해도 충분해요.',
            // [개선] "Runner·고급 기능" 언급 제거
          },
          {
            title: 'Mac을 쓰고 있어요',
            // [개선] "추후 보완 예정" 대신 바로 할 수 있는 방법 안내
            body: '다운로드 페이지(postman.com/downloads)에서 Mac용 파일을 받아 설치하면 돼요. 설치 방법은 Windows와 비슷해요.',
          },
        ],
      },
    ],
  },
]

export const pages = buildPartPages({
  cover: {
    badges: ['Postman 사용법 자료집', 'Vol.1 설치 및 시작하기'],
    warmBadge: '1-3',
    partLabel: 'PART 03 · 실행·설치하기',
    titleLines: ['웹 실행 및', '앱 설치'],
    leadLines: [
      '브라우저에서 바로 열거나,',
      // [개선] "웹(사이트)에서 바로 쓰거나" → 더 자연스러운 표현
      'Windows PC에 앱을 설치해 실행해 봐요.',
    ],
  },
  toc: {
    goals: [
      '<strong>웹 Postman</strong> 또는 <strong>PC 앱</strong> 중 하나로 Postman을 열 수 있어요.',
      // [개선] "데스크톱 앱" → "PC 앱"으로 더 쉬운 표현
      '내 환경에 맞는 방법을 골라 실제로 화면을 열었어요.',
      // [개선] "두 방식의 차이를 알고" → 더 행동 중심으로
      'Postman 첫 화면(워크스페이스)까지 <strong>눈으로 확인</strong>했어요.',
    ],
    quote: '일단 열리면 반은 성공이에요. 어떻게 쓰는지는 1-4에서 천천히 살펴볼게요.',
    // [개선] 기존 quote는 로그인 전제 조건 설명 → 긴장 푸는 문장으로 교체
    flowCards: [
      { title: '방법 고르기', body: '웹 or PC 앱, 편한 쪽을 선택해요.' },
      // [개선] "웹 vs 앱" → "방법 고르기"
      { title: '웹으로 열기', body: 'postman.com → Launch Postman 클릭' },
      { title: 'PC 앱 설치', body: '설치 파일 받기 → 더블클릭 → 자동 설치' },
      // [개선] "downloads에서 받아 Windows에 설치해요" → 실제 흐름 반영
      { title: '첫 화면 확인', body: '화면이 뜨면 완료! 다음은 화면 익히기.' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: 'Vol.1 로드맵',
    currentPartNum: '1-3',
    roadmap: VOL1_ROADMAP,
    ctaTitle: '화면이 열렸으면 1-3은 끝!',
    // [개선] "실행 준비 끝!" → 좀 더 확인해 주는 톤
    ctaSubtitle: '1-4에서 Postman 화면 구성을 함께 살펴볼게요.',
  },
})