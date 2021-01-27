import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search.box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(uses => this.setState({ monsters: uses }));
  }

  render(){
    // search part
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
        monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
          {/* Children are the name that past in betwen opening brackets and closing brackests */}
          <h1>Monsters Rolodex</h1>
          <SearchBox 
            placeholder='Search monster'
            handleChange={e => this.setState({searchField: e.target.value})}
          />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
