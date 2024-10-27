import about from "../assets/img/about02.jpg";
import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";
import port06 from "../assets/img/port06.png";
// import port07 from "../assets/img/port07.jpg";
// import port08 from "../assets/img/port08.jpg";
// import port09 from "../assets/img/port09.jpg";
// import port10 from "../assets/img/port10.jpg";


export const headerNav = [
  {
    id: "intro",
    title: "intro",
    url: "#intro"
  },
  {
    id: "skill",
    title: "skill",
    url: "#skill"
  },
  {
    id: "site",
    title: "site",
    url: "#site"
  },
  {
    id: "portfolio",
    title: "portfolio",
    url: "#port"
  },
  {
    id: "contact",
    title: "contact",
    url: "#contact"
  }
];

export const introText = {
  title: "port developer",
  desc: ["talent is", "found at the end of the", "effort"],
  img: about
}

export const skillText = [
  {
    title: "꿈을 설계하고 디자인하다.",
    desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
  },
  {
    title: "열심히 할수록 기회는 따른다.",
    desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
  },
  {
    title: "나에게 정직하다.",
    desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
  }
]

// export const siteText = [
//   {
//     text: ["make", "site compliant with", "webstandard"],
//     title: "비트를 이용한 사이트 제작",
//     code: "https://github.com/webstoryboy/port2023-vite",
//     view: "https://port2023-vite.netlify.app",
//     info: [
//       "site coding",
//       "production period : two days",
//       "use stack : HTML5/CSS3, CSS Variable, Vite",
//     ],
//   },
//   {
//     text: ["make", "site compliant with", "react.js"],
//     title: "리액트를 이용한 사이트 제작",
//     code: "https://github.com/webstoryboy/port2023-react",
//     view: "https://port2023-react.netlify.app",
//     info: [
//       "site coding",
//       "production period : two days",
//       "use stack : HTML5/CSS3, CSS Variable, react",
//     ],
//   },
//   {
//     text: ["make", "site compliant with", "vue.js"],
//     title: "뷰를 이용한 사이트 제작",
//     code: "https://github.com/webstoryboy/port2023-vue",
//     view: "https://port2023-vue.netlify.app",
//     info: [
//       "site coding",
//       "production period : two days",
//       "use stack : HTML5/CSS3, Scss Variable, vue",
//     ],
//   },
//   {
//     text: ["make", "site compliant with", "next.js"],
//     title: "넥스트를 이용한 사이트 제작",
//     code: "https://github.com/webstoryboy/port2023-next",
//     view: "https://port2023-next.netlify.app",
//     info: [
//       "site coding",
//       "production period : two days",
//       "use stack : HTML5/CSS3, Scss Variable, next.js",
//     ],
//   },
// ];

export const portText = [
  {
    num: "01",
    name: "웹 표준 사이트",
    title: "웹 표준 사이트",
    desc: "웹 표준은 모든 기기와 브라우저에서 일관된 경험을 보장하는 기술적 지침이며 이러한 기술적 지침을 준수하여 제작한 사이트 입니다.",
    img: port01,
    code: "https://www.figma.com/proto/dbTCG5iz0VENlr3GOF88Xc/%EC%9B%B9%ED%91%9C%EC%A4%80%EC%82%AC%EC%9D%B4%ED%8A%B8%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8?page-id=0%3A1&node-id=26-38&scaling=contain",
    view: "https://jangar6.github.io/dothome1/wabstandard/index.html",
  },
  {
    num: "02",
    name: "스타벅스 홈페이지",
    title: "스타벅스 홈페이지",
    desc: "스타벅스 예제를 따라 만든 사이트입니다. 메인 페이지의 메뉴와 스크롤시 나타나는 다양한 효과들을 적용한 페이지입니다.",
    img: port02,
    code: "https://github.com/alliejj99/Starbucks",
    view: "https://heartfelt-bubblegum-0f5a41.netlify.app/",
  },
  {
    num: "03",
    name: "Apple_iPad Store",
    title: "Apple_iPad Store",
    desc: "Apple의 IPad Stroe 사이트를 구현했습니다. js 데이터를 기반으로 네비게이션 표현과 기타 정보, 날짜 표현, video 제어 등 하드코딩으로 제작하였습니다.",
    img: port03,
    code: "https://github.com/alliejj99/apple-ipad",
    view: "https://apple-ipad-beta.vercel.app/",
  },
  {
    num: "04",
    name: "영화 검색 사이트",
    title: "영화 검색 사이트",
    desc: "TypeScript로 작성하였으며 API를 연동하여 영어로 영화를 검색할 수 있는 사이트를 제작하였습니다. 컴포넌트와 모듈화, 스토어개념을 익히고 데이터를 만들고 목록화 하는등의 기술을 사용하였습니다.",
    img: port04,
    code: "https://github.com/alliejj99/Movie-App/tree/typescript",
    view: "https://movie-pi3a107m2-alliejj99.vercel.app/#/",
  },
  {
    num: "05",
    name: "Disney Plus App",
    title: "Disney Plus App",
    desc: "리액트로 작성한 Disney-Plus-App입니다. 실제 로그인 기능도 추가하여 완성도 높은 포트폴리오입니다.",
    img: port05,
    code: "https://github.com/alliejj99/React-Disney-Plus-App",
    view: "https://react-disney-pluse-app.web.app/",
  },
  {
    num: "06",
    name: "Youtube App",
    title: "Youtube App",
    desc: "Vite와 SASS/SCSS 로 만드는 유튜브앱입니다. 전체적으로 SASS를 사용하여 반응형을 구현했으며 기본 사용법을 익히기 위해 제작하였습니다. 기본적인 기능으로는 사이드 메뉴, 페이지 이동, 영상 출력, 영상 정보 출력, 관련 영상 출력, 해당 영상의 댓글등을 구현하였습니다.",
    img: port06,
    code: "https://github.com/alliejj99/React-Sass-Youtube-App",
    view: "https://react-sass-youtube-app.vercel.app/",
  },

];

export const contactText = [
  {
    title: "☎️: 010-8266-0865",
  },
  {
    title: "📧: alliejj99@gmail.com",
  },
];

export const footerText = [
  {
    title: "notion",
    desc: "UI/UX 개발자, 장아름은 어떤 사람인가 더 알 수 있습니다.",
    link: "https://languid-argon-8f2.notion.site/UI-UX-a02309618af04592a862aa2467c95722?pvs=4",
  },
  {
    title: "github__01",
    desc: "프론트엔드와 퍼블리셔를 같이 작업중인 소스들을 볼 수 있습니다.",
    link: "https://github.com/alliejj99",
  },
  {
    title: "github__02",
    desc: "퍼블리셔를 준비할때 참고할 수 있는 다양한 소스들을 볼 수 있습니다.",
    link: "https://github.com/alliejj99",
  },
  {
    title: "CodePen",
    desc: "다양한 효과들및 작업중인 이벤트등을 확인할 수 있습니다.",
    link: "https://codepen.io/jangar6",
  },
  {
    title: "blog",
    desc: "기본적인 스킬및 작업들을 정리한것을 확인 할 수 있습니다.",
    link: "https://jangar6.github.io/dothome1/",
  },
];