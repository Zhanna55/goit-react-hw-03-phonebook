import { Component } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, contact] };
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />
        <h2> Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
