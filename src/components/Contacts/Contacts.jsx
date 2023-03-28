import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

import { List } from './Contacts.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, number }, idx) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
          index={idx}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default ContactList;