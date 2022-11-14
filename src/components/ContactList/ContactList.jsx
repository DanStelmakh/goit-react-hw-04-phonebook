import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Btn type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};

// class ContactList extends React.Component {
//   render() {

//   }
// }
// export { ContactList };
