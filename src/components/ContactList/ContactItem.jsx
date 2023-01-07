import PropTypes from 'prop-types';
import { Info, Button } from './ContactList.styled';
export const ContactItem = ({
  contact: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <>
      <Info>
        {name}: {number}
      </Info>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
