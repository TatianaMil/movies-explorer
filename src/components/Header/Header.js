import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../../images/logo.svg"
import account from "../../images/profile777.svg"
import menu from "../../images/menu-button.svg"
import Navigation from '../Navigation/Navigation';

function Header({ background }) {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }
  return (
    <>
    {/* Heder будет отображаться по условию js кода. Один хедер на данный момент закомментирован.
    Верстка сделана по заданию */}
     <header
        className="header"
        id="header"
        style={{ backgroundColor: background }}
      >
        <Link to="/" className="form__logo">
          <img src={logo} alt="логотип" />
        </Link>
        <div className="header__button-container">
          <Link to="/signup" className="header__button">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button header__button-green">
            Войти
          </Link>
        </div>
      </header>


       <header className="header header_gray" id="header">
        <Link to="/" className="form__logo">
          <img src={logo} alt="логотип" />
        </Link>
        <div className="header__button-container_films">
          <NavLink
            to="/movies"
            className="header__button"
            activeClassName="header__button_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="header__button"
            activeClassName="header__button_active"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="header__button-container">
          <Link to="/profile" className="header__account-button">
            <img
              className="header__account-image"
              src={account}
              alt="аккаунт"
            />
          </Link>
          <button className="header__menu-button" onClick={handleOpen}>
            <img src={menu} alt="меню" />
          </button>
        </div>
        {isClicked ? <Navigation handleClose={handleClose} /> : ''}
      </header>
    </>
  )
}

export default Header
