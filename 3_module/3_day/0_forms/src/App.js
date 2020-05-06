import React from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

class App extends React.Component {
  state = {
    contacts: [],
  };

  addContact = (childsState) => {
    console.log(childsState);
    const newContact = childsState;
    const copy = [...this.state.contacts, newContact];
    this.setState({ contacts: copy });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ContactList allTheContacts={this.state.contacts} />
          <AddContact toto={this.addContact} />
        </header>
      </div>
    );
  }
}

export default App;
