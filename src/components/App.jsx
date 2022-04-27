import { Component } from 'react';
// import PhonebookClass from './Phonebook/Phonebook';
// import TodosRenderClass from './TodosRenderClass/TodosRenderClass';
import { nanoid } from 'nanoid';
// import SearchContact from './SearchContact/SearchContact';
import HooksSearchContact from './SearchContact/HooksSearchContact';
import PhonebookHooks from './Phonebook/HooksPhonebook';
import HooksTodoRender from './TodosRenderClass/HooksTodosRender';
import { useState, useEffect } from 'react';

export default function App() {
  const [dataBase, setDataBase] = useState(
    (() => {
      let x = localStorage.getItem('localDB');
      let xx = JSON.parse(x);
      return xx;
    }) ?? []
  );
  const [searchValueApp, setSearchValueApp] = useState('');
  const deleteWithId = DBid => {
    setDataBase(dataBase.filter(elem => elem.id !== DBid));
  };

  const formSubmitHandler = data => {
    const newContact = { ...data, id: nanoid() };
    let test = dataBase.find(elem => {
      if (elem.name === newContact.name && elem.number === newContact.number) {
        alert('this contact has allready been added');
        return true;
      }
      return false;
    });
    if (!test) {
      setDataBase([newContact, ...dataBase]);
    }
  };
  const showSearchedValues = data => {
    setSearchValueApp(data.target.value);
  };
  const filteredContacts = () => {
    return dataBase.filter(elem =>
      elem.name.toLocaleLowerCase().includes(searchValueApp.toLocaleLowerCase())
    );
  };
  useEffect(() => {
    localStorage.setItem('localDB', JSON.stringify(dataBase));
    const takeLocalBD = localStorage.getItem('localDB');
    const parseLocalBD = JSON.parse(takeLocalBD);
    if (parseLocalBD === null) {
      return setDataBase([]);
    }
    setDataBase(parseLocalBD);
  }, [dataBase]);
  return (
    <div>
      <PhonebookHooks randomvarname={formSubmitHandler} />
      <HooksSearchContact
        searchValueParse={showSearchedValues}
        parseValueToSearchContact={searchValueApp}
      />
      <HooksTodoRender
        datafromdataBase={filteredContacts()}
        deleteSpecific={deleteWithId}
      />
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
class OldApp extends Component {
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
    const takeLocalBD = localStorage.getItem('localDB');
    const parseLocalBD = JSON.parse(takeLocalBD);
    if (parseLocalBD === null) {
      return this.setState({ dataBase: [] });
    }
    this.setState({ dataBase: parseLocalBD });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.dataBase !== prevState.dataBase) {
      localStorage.setItem('localDB', JSON.stringify(this.state.dataBase));
    }
  }
  render() {
    // console.log('searchValueApp: ', this.state.searchValueApp);
    // console.log('показываю новый массив: 42', this.state.dataBase);
    return (
      <div>
        <PhonebookHooks randomvarname={this.formSubmitHandler} />
        <HooksSearchContact
          searchValueParse={this.showSearchedValues}
          parseValueToSearchContact={this.state.searchValueApp}
        />
        <HooksTodoRender
          datafromdataBase={this.filteredContacts()}
          deleteSpecific={this.deleteWithId}
        />
      </div>
    );
  }
}

// export default App;
