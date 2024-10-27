import React from "react";

import { footerText } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">

        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="javascript:void(0)">다양한 작업물을 확인해주세요!</a>
            </div>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, index) => (
                <li key={index}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">
          © 2024 Next PortFolio<br />
          이 사이트는 Next.js를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  )
}

export default Footer