import React from "react"
import "./ScrollToTop.css"
import { Link } from "react-scroll"
import arrow from "../../images/up-arrow.svg"

// Компонент представляет собой кнопку прокрутки вверх страницы.
// Он используется для создания кнопки, которая позволяет пользователям
// быстро прокрутить страницу к началу.
function ScrollToTop() {
  return (
    <Link to="header" className="scroll" smooth={true} duration={600}>
      <img src={arrow} alt="логотип" className="scroll__image" />
    </Link>
  )
}

export default ScrollToTop
