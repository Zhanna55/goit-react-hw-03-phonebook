import { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { FormContainer, FormLabel, FormButton } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required()
    .matches(
      '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };
  handleSubmit = ({ name, number }, { resetForm }) => {
    const nameInContacts = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${name} is already in contacts`);
      resetForm();
      return;
    }
    const contact = { id: nanoid(), name, number };
    this.props.onSubmit(contact);
    resetForm();
  };
  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormContainer>
          <Form autoComplete="off">
            <FormLabel htmlFor="name">
              Name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </FormLabel>
            <FormLabel htmlFor="number">
              Number
              <Field type="tel" name="number" />
              <ErrorMessage name="number" component="div" />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        </FormContainer>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ContactForm;
