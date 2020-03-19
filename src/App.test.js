import React, {useState} from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmergencyContacts from './Functions/contacts';

/* test('check if contact getting added', () => {
  const contacts = [{"name":"rishu", "email":"ris@gmail.com"}];
  const setContacts = (newcon) =>{

  }
  const user = "Akshay";
  const { getByTestID  } = render(<EmergencyContacts contacts={ contacts } user={user} setContacts={setContacts}/>);
  const xButton = getByText("X");
  const table = getByTestID("emergency");
  fireEvent.click(xButton);
  expect(table).toBe(null); 
   expect(container.querySelector('#checkin-button').textContent).toBe('CheckIn');
  const id = getByTestId("emergency");
  expect(id.textContent).toBe('X');
}); */
