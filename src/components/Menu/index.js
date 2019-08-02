import React, { Component } from "react";
import styles from "./index.scss";
import { NavLink } from "react-router-dom";

// import MenuButton from "../MenuButton";

const MENU_LIST = [
  { name: `На главную`, url: `/` },
  { name: `Тесты`, url: `/tests` },
  { name: `Статистика`, url: `/statistics` },
  { name: `Контакты`, url: `/contacts` },
  { name: `О нас`, url: `/about` },
  { name: `Войти`, url: `/login` }
];
export default class Menu extends Component {
  render() {
    const { menuContainer, menuButton, menuButtonActive } = styles;
    return (
      <nav>
        <ul className={menuContainer}>
          {MENU_LIST.map(el => (
            <NavLink
              key={el.name}
              to={el.url}
              className={menuButton}
              activeClassName={el.url === "/" ? `` : menuButtonActive}
            >
              {el.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    );
  }
}
