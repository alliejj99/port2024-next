import React from "react";

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          <article className="site__item s1">
            <span className="num">1.</span>
            <div className="text">
              <div>Make</div>
              <div>site compliant with</div>
              <div>resume</div>
            </div>

            <h3 className="title">지금까지의 자신을 정리한 사이트</h3>
            <div className="btn">
              <a href="https://github.com/alliejj99">code</a>
              <a href="https://languid-argon-8f2.notion.site/Jang-A-Reum-a02309618af04592a862aa2467c95722?pvs=4">view</a>
            </div>

            <div className="info">
              <span>site coding</span>
              <span>production period : 진행중</span>
              <span>use stack : HTML5/CSS3, scss, tailwind, javascript, typescript, git, gitlab/github, react, php</span>
            </div>
          </article>
          <article className="site__item s2">
            <span className="num">2.</span>
            <div className="text">
              <div>Make</div>
              <div>site compliant with</div>
              <div>Portfolio 1</div>
            </div>
            <h3 className="title">퍼블리셔가 되기까지의 과정에서 기술이나 공부 내용들을 정리한 사이트</h3>
            <div className="btn">
              <a href="https://github.com/jangar6/dothome1">github</a>
              <a href="https://jangar6.github.io/dothome1/">view_01</a>
              <a href="https://jangar6.github.io/pages/#/main/study">view_02</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : 약 6개월</span>
              <span>use stack : html5/css3, CSS, javascript, jQuery, GSAP</span>
            </div>
          </article>
          <article className="site__item s3">
            <span className="num">3.</span>
            <div className="text">
              <div>Make</div>
              <div>site compliant with</div>
              <div>Portfolio 2</div>
            </div>
            <h3 className="title">취업 후에도 학습을 위해 작업한 포트폴리오</h3>
            <div className="btn">
              <a href="https://github.com/webstoryboy/port2023-vue">code</a>
              <a href="https://www.notion.so/12c90cfca4ca8063bcb1fb3c6606932f?pvs=4">view</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : 약 5일</span>
              <span>use stack : html5/css3, CSS, javascript, git, vercel, figma ..</span>
            </div>
          </article>
          <article className="site__item s4">
            <span className="num">4.</span>
            <div className="text">
              <div>Make</div>
              <div>site compliant with</div>
              <div>Project</div>
            </div>
            <h3>지금껏 회사에서 맡았던 프로젝트를 정리한 사이트</h3>
            <div className="btn">
              <a href="https://www.notion.so/12c90cfca4ca8016af81c680d17623ef?pvs=4">view</a>
            </div>
            <div className="info">
              <span>site coding</span>
              <span>production period : - </span>
              <span>use stack : html5/css3, CSS, javascript, git, php, zeplin, figma ..</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Site