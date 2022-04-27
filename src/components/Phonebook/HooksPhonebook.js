import './PhonebookStyle.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function PhonebookHooks({ randomvarname }) {
  const firstFormNameId = nanoid();
  const firstFormNumberId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    randomvarname({ name, number });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form className="addinfo_div" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={firstFormNameId}>
          Name
          <input
            type="text"
            id={firstFormNameId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor={firstFormNumberId}>
          Tel
          <input
            id={firstFormNumberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" className="add_btn">
          Add Contact
        </button>
      </form>
    </>
  );
}
