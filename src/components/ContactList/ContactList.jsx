import PropTypes from 'prop-types';
import { Contacts, ContactItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Contacts>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p>
          {name}: {number}
        </p>

        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
      </ContactItem>
    ))}
  </Contacts>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
