import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"

function Login() {
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
    >
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
    </Form>
  )
}

export default Login