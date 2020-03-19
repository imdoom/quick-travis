import { Table, Button } from 'rbx';
import React from 'react';
import FirebaseHelper from './FirebaseHelper';

const RemoveContact = (contact, user, setContacts) => {
    FirebaseHelper.RemoveContact(contact, user);
    FirebaseHelper.FetchContacts(contact.name, contact.email).then(currContacts => {
      setContacts(currContacts);
    })
}

const EmergencyContacts = ({contacts}, user, setContacts) => {
    return (contacts?
      <Table id='contact-table' data-testid="emergency">
        <Table.Body>
          {contacts.map(contact =>
            <Table.Row key={contact.name.concat('_', contact.email)}>
              <Table.Cell>
                {contact.name}
              </Table.Cell>
              <Table.Cell>
                {contact.email}
              </Table.Cell>
              <Table.Cell>
                <Button onClick={()=>{RemoveContact(contact,user,setContacts)}}>X</Button>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    :
    null
  )
};

export default EmergencyContacts;