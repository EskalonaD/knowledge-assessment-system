import React, { Component } from "react";
import styles from "./index.scss"
import ToolsContainer from "@containers/ToolsContainer";

export default class Contacts extends Component {
  render() {
    return (
      <main className={styles.container}>
        <section className={styles.contacts}>

        Контакты

Ждем тех, кто хочет участвовать в нашем проекте!

Мы находимся по адресу:
г. Киев, ул. Строителей 16 
        </section>
        <section className={styles.mapContainer}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.6571784286552!2d30.48664366387624!3d50.43031963114605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cee98e03beb3%3A0x4e0ae58cf3aa69f4!2sEPAM+Systems!5e0!3m2!1sru!2sua!4v1565142558380!5m2!1sru!2sua" width="100%" height="450" ></iframe></section>
      </main>
    );
  }
}
