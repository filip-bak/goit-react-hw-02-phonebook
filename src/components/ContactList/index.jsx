import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  static propTypes = {};

  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={styles.item} key={id}>
              <span>{name}</span>:&nbsp;
              <span>{number}</span>
              <button className={styles.btn}></button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
