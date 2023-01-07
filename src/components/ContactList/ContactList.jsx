import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactItem';
import { Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </Item>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
