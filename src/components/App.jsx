import { Component } from 'react';
import PhonebookClass from './Phonebook/Phonebook';
import TodosRenderClass from './TodosRenderClass/TodosRenderClass';
import { nanoid } from 'nanoid';
import SearchContact from './SearchContact/SearchContact';

class App extends Component {
  state = {
    dataBase: [],
    searchValueApp: '',
  };

  deleteWithId = DBid => {
    // console.log('Получаю ИД контакта по кнопке удалить: ', DBid);
    let x = this.state.dataBase;
    // console.log('x: ', x);
    let xx = x.filter(elem => elem.id !== DBid);
    this.setState({
      dataBase: xx,
    });
  };

  formSubmitHandler = data => {
    // console.log('споймал данные из phonebook.js: ', data);
    const newContact = { ...data, id: nanoid() };
    // console.log('добавляю ID ', newContact);
    // console.log('беру старый массив:', this.state.dataBase);
    let test = this.state.dataBase.find(elem => {
      if (elem.name === newContact.name && elem.number === newContact.number) {
        alert('this contact has allready been added');
        return true;
      }
      return false;
    });
    // console.log('test: ', test);
    this.setState(prevState => {
      if (!test) {
        return {
          dataBase: [newContact, ...prevState.dataBase],
        };
      }
    });
    // setTimeout(() => {
    //   // console.log('показываю новый массив:', this.state.dataBase);
    // });
  };
  showSearchedValues = data => {
    this.setState({
      searchValueApp: data.target.value,
    });
  };
  filteredContacts = () => {
    return this.state.dataBase.filter(elem =>
      elem.name
        .toLocaleLowerCase()
        .includes(this.state.searchValueApp.toLocaleLowerCase())
    );
  };
  componentDidMount() {
    // console.log('App componentDidMount');

    const takeLocalBD = localStorage.getItem('localDB');
    const parseLocalBD = JSON.parse(takeLocalBD);
    if (parseLocalBD === null) {
      return this.setState({ dataBase: [] });
    }
    this.setState({ dataBase: parseLocalBD });
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    if (this.state.dataBase !== prevState.dataBase) {
      localStorage.setItem('localDB', JSON.stringify(this.state.dataBase));
    }
  }
  render() {
    // console.log('searchValueApp: ', this.state.searchValueApp);
    // console.log('показываю новый массив: 42', this.state.dataBase);
    return (
      <div>
        <PhonebookClass randomvarname={this.formSubmitHandler} />
        <SearchContact
          searchValueParse={this.showSearchedValues}
          parseValueToSearchContact={this.state.searchValueApp}
        />
        <TodosRenderClass
          datafromdataBase={this.filteredContacts()}
          deleteSpecific={this.deleteWithId}
        />
      </div>
    );
  }
}

export default App;
