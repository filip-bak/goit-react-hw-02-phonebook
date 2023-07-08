import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {};
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onFormSubmit } = this.props;
    const { name, number } = this.state;

    onFormSubmit(name, number);
  };

  handleChange = e => {
    const { name, number } = e.currentTarget.form.elements;

    this.setState(prevState => ({
      ...prevState,
      name: name.value,
      number: number.value,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
              title="Phone number must be digits and can contain spaces, dashes and can start with +"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
