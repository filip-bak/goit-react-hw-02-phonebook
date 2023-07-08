import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
    filter: '',
  };

  handleFormSubmit = (name, number) => {
    const id = nanoid(7);
    const newContact = {
      id,
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = newFilter => {
    this.setState(prevState => ({
      filter: newFilter,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <Section title="Phonebook">
          <ContactForm onFormSubmit={this.handleFormSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter onFilterChange={this.handleFilterChange} />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
