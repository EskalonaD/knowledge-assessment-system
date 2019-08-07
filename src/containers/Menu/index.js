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
    // console.log(getComputedStyle(document.querySelector(`main`)).width)
    return (
      <nav>
        {/* <button className={styles.mobile_menuToggle}>Меню</button> */}
        <ul className={menuContainer}>
          {MENU_LIST.map((el, i) => {
            if(i !== MENU_LIST.length - 1 ){
            return (<React.Fragment><NavLink
              key={el.name}
              to={el.url}
              className={menuButton}
              activeClassName={el.url === "/" ? `` : menuButtonActive}
            >
              {el.name}
            </NavLink><div className={styles.separator}></div></React.Fragment>)
            } else {
              return (<NavLink
                key={el.name}
                to={el.url}
                className={menuButton}

                activeClassName={el.url === "/" ? `` : menuButtonActive}
              >
                {el.name}
              </NavLink>)
            }
          }
          )}
        </ul>
      </nav>
    );
  }
}
