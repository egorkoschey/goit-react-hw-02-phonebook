import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Button } from './Contacts.styled';

function ContactListItem({ id, name, number, onDelete, index }) {
  return (
    <ListItem key={id}>
      <div>{index + 1}</div>
      {name}: {number}
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactListItem;