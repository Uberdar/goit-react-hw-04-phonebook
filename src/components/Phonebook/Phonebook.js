import React from 'react';
import './PhonebookStyle.css';
import { nanoid } from 'nanoid';

class PhonebookClass extends React.Component {
  //   static defaultState = {
  //     contacts: [],
  //     name: '',
  //   };
  firstFormNameId = nanoid();
  firstFormNumberId = nanoid();

  state = {
    // contacts: [],
    name: '',
    number: '',
  };
  //   handleChangeName = evt => {
  //     this.setState({
  //       name: evt.currentTarget.value,
  //     });
  //   };
  //   handleChangeTel = evt => {
  //     this.setState({
  //       number: evt.currentTarget.value,
  //     });
  //   };
  mainChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.randomvarname(this.state);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form className="addinfo_div" onSubmit={this.handleSubmit}>
          <label htmlFor={this.firstFormNameId}>
            Name
            <input
              type="text"
              id={this.firstFormNameId}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.mainChangeHandler}
            />
          </label>
          <label htmlFor={this.firstFormNumberId}>
            Tel
            <input
              id={this.firstFormNumberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.mainChangeHandler}
            />
          </label>
          <button type="submit" className="add_btn">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

export default PhonebookClass;
