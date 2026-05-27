import type { ContentPageData, FigureSlot } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import meta from './meta.json'

export const partId = '1-3-web-install'
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
        label: '선택',
        title: 'Postman은 두 가지로 쓸 수 있어요',
        lead: '설치 없이 바로 쓸 수도 있고, PC에 앱을 깔아 쓸 수도 있어요. 팀·PC 환경에 맞는 쪽을 고르면 됩니다.',
      },
      {
        kind: 'split-2',
        left: {
          title: '🌐 웹(사이트) 버전',
          body: '브라우저에서 <strong>postman.com</strong>에 접속해 바로 사용해요.',
          items: [
            '설치·관리자 권한 없이 빠르게 시작',
            '회사 PC에서 설치가 막혀 있을 때 유용',
            '기본적인 요청 보내기·확인에 충분',
          ],
          variant: 'post',
        },
        right: {
          title: '💻 데스크톱 앱',
          body: '공식 사이트에서 받아 <strong>Windows PC</strong>에 설치해요.',
          items: [
            '별도 프로그램 창으로 안정적으로 사용',
            'Collection Runner 등 일부 기능은 앱 권장',
            '이 자료집 후반 실습도 앱 기준으로 진행',
          ],
          variant: 'app',
        },
        footnote: '둘 다 같은 Postman 계정으로 이어집니다. <strong>웹으로 먼저 써 보고 → 나중에 앱 설치</strong>해도 괜찮아요.',
      },
      {
        kind: 'section-header',
        label: '준비',
        title: '데스크톱 앱 설치 시 확인할 것',
      },
      {
        kind: 'cards-2',
        cards: [
          { title: '인터넷 연결', body: '설치 파일을 받을 때 필요해요. 회사망이면 보안 정책으로 막힐 수 있어요 — IT에 문의해 보세요.' },
          { title: '관리자 권한 (Windows)', body: '회사 PC는 설치 시 관리자 승인이 필요할 수 있어요. 안 되면 IT에 Postman 설치를 요청하세요.' },
          { title: '디스크 여유 공간', body: '대략 500MB 이상 여유가 있으면 충분해요.' },
          { title: 'Windows 10 이상', body: '이 파트의 설치 따라하기는 Windows 기준이에요. (Mac은 추후 보완 예정)' },
        ],
      },
      {
        kind: 'tip-box',
        html: '<strong>Tip.</strong> 1-2에서 로그인했다면, 웹·앱 모두 같은 계정으로 이어집니다. 지금은 “화면이 뜨는지”만 확인하면 됩니다.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '경로 A',
        title: '웹(사이트)에서 바로 쓰기',
        lead: '설치 없이 브라우저만 있으면 됩니다. Chrome·Edge 등 최신 브라우저를 권장해요.',
      },
      {
        kind: 'key-box',
        headline: 'https://www.postman.com/',
        body: '검색 광고 말고 위 주소로 접속하세요. <strong>Launch Postman</strong>으로 웹 워크스페이스를 열 수 있어요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: 'postman.com 접속',
            body: '주소창에 <strong>postman.com</strong> 입력 후 접속합니다.',
            figure: fig('images/07-web-home.png', 'Postman 홈 — Launch Postman 또는 Sign In이 보이는 화면'),
          },
          {
            title: '웹 Postman 실행',
            body: '<strong>Launch Postman</strong>(또는 유사 버튼)을 눌러 브라우저 안에서 Postman을 엽니다. 1-2에서 로그인했다면 워크스페이스가 바로 열려요.',
            figure: fig('images/08-web-workspace.png', '브라우저 안 Postman 웹 워크스페이스 화면'),
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
        label: '경로 B · STEP 1',
        title: '데스크톱 앱 — 공식 사이트에서 받기',
        lead: 'Windows용 설치 파일을 받습니다. 아래 주소만 사용하세요.',
      },
      {
        kind: 'key-box',
        headline: 'https://www.postman.com/downloads/',
        body: '검색엔진 광고 링크 말고, 위 주소로 들어가면 최신 설치 파일을 받을 수 있어요.',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '브라우저에서 다운로드 페이지 열기',
            body: '주소창에 <strong>postman.com/downloads</strong> 입력 후 접속합니다.',
            figure: fig('images/01-downloads-page.png', 'Postman 다운로드 페이지 — Download 버튼이 보이는 화면'),
          },
          {
            title: 'Download for Windows 클릭',
            body: '파일이 자동으로 받아져요. 보통 이름은 <strong>Postman-win64-Setup.exe</strong> 형태입니다.',
            figure: fig('images/02-download-button.png', 'Download for Windows 버튼'),
          },
          {
            title: '다운로드 폴더에서 파일 확인',
            body: '브라우저 하단 다운로드 막대, 또는 <strong>다운로드</strong> 폴더에서 설치 파일을 찾습니다.',
            figure: fig('images/03-downloaded-file.png', '다운로드 완료된 설치 파일'),
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
        label: '경로 B · STEP 2',
        title: 'Windows — 설치 따라하기',
      },
      {
        kind: 'steps',
        steps: [
          {
            title: '설치 파일 더블클릭',
            body: '<strong>Postman-win64-Setup.exe</strong> 실행. “앱이 PC를 변경하도록 허용”이 뜨면 <strong>예</strong>를 누릅니다.',
            figure: fig('images/04-win-uac.png', 'Windows 사용자 계정 컨트롤(UAC) 허용 창'),
          },
          {
            title: '설치 마법사 진행',
            body: '안내에 따라 <strong>Next → Install</strong> 순서로 진행합니다. 경로는 기본값 그대로 두어도 됩니다.',
            figure: fig('images/05-win-installer.png', '설치 마법사 — Install 버튼이 보이는 화면'),
          },
          {
            title: '완료 후 실행',
            body: '<strong>Finish</strong>를 누르면 Postman이 자동 실행되는 경우가 많아요. 바탕화면에 아이콘이 생겼는지 확인하세요.',
            figure: fig('images/06-win-finish.png', '설치 완료 화면 · 바탕화면 Postman 아이콘'),
          },
        ],
      },
      {
        kind: 'warn-box',
        html: '<strong>설치가 막히면</strong> — 회사 보안 프로그램 때문일 수 있어요. IT에 “Postman Desktop 설치 허용”을 요청하거나, <strong>경로 A(웹)</strong>로 먼저 시작하세요.',
      },
    ],
  },
  {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: '확인',
        title: '이렇게 보이면 준비 완료',
        lead: '웹이든 앱이든, 아래 중 비슷한 화면이면 1-3은 끝난 거예요.',
      },
      {
        kind: 'figure',
        figure: fig('images/09-first-launch.png', 'Postman 첫 화면 — 웹·앱 공통 (워크스페이스)'),
      },
      {
        kind: 'check-done',
        items: [
          'Postman 화면(웹 탭 또는 앱 창)이 정상적으로 열린다',
          '왼쪽 메뉴·가운데 작업 영역이 보인다 (빈 화면이어도 OK)',
          '1-2에서 로그인했다면 Workspace·Collections 메뉴가 보인다',
        ],
      },
      {
        kind: 'tip-box',
        html: '<strong>업데이트 안내</strong>(앱)가 뜨면 “나중에” 또는 업데이트 후 재시작해도 됩니다. 웹은 브라우저 새로고침으로 최신 UI를 볼 수 있어요.',
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
          { title: '설치 파일이 안 받아져요', body: 'VPN·회사 프록시를 끄거나, IT에 postman.com 허용을 요청하세요. 당장은 <strong>웹 버전</strong>으로 시작해 보세요.' },
          { title: '실행해도 아무 반응이 없어요', body: '재부팅 후 다시 실행. Windows는 작업 관리자에서 이전 Postman 프로세스 종료 후 재시도.' },
          { title: '웹 vs 앱, 뭐가 다르죠?', body: '기본 요청·응답 확인은 둘 다 가능해요. Runner·일부 고급 기능은 <strong>데스크톱 앱</strong>을 권장합니다.' },
          { title: 'Mac도 설명 있나요?', body: '이 파트는 Windows 설치 + 웹 기준이에요. Mac 설치 안내는 필요 시 추후 보완할 예정입니다.' },
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
      '웹(사이트)에서 바로 쓰거나,',
      'Windows PC에 앱을 설치해 실행해 봐요.',
    ],
  },
  toc: {
    goals: [
      '<strong>웹 Postman</strong> 또는 <strong>데스크톱 앱</strong> 중 하나로 실행할 수 있어요.',
      '두 방식의 차이를 알고, 내 환경에 맞는 경로를 골랐어요.',
      'Postman 첫 화면(워크스페이스)까지 <strong>눈으로 확인</strong>했어요.',
    ],
    quote: '1-2에서 계정·로그인을 마쳤다면, 웹·앱 모두 같은 계정으로 이어집니다.',
    flowCards: [
      { title: '웹 vs 앱', body: '설치 없이 웹, 또는 Windows 앱 중 선택해요.' },
      { title: '경로 A · 웹', body: 'postman.com에서 Launch Postman으로 시작해요.' },
      { title: '경로 B · 앱', body: 'downloads에서 받아 Windows에 설치해요.' },
      { title: '첫 화면 확인', body: '뜨면 성공! 다음은 화면 익히기.' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: 'Vol.1 로드맵',
    currentPartNum: '1-3',
    roadmap: VOL1_ROADMAP,
    ctaTitle: '실행 준비 끝! 다음은 화면 익히기',
    ctaSubtitle: '1-4에서 메뉴와 Workspace를 빠르게 살펴볼 거예요.',
  },
})
