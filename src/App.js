import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends React.Component {
    
    state = {
        characters: [
          {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
        ],
      }
  
    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }

      resetCharacter = () => {
        this.setState({ characters: [] })
      }

    handleSubmit = (character) => {
      this.setState({characters: [...this.state.characters, character]})
    }
    
    render() {
      
      const message ='Hello, React!5'
      const { characters } = this.state

      return (
        <div className="App">
          <h1>{message}</h1>          
            <div className='container'>
                <Table  characterData={characters} removeCharacter={this.removeCharacter} />
                <Form  handleSubmit={this.handleSubmit} />
                <button onClick={this.resetCharacter}>Reset</button>
            </div>        
        </div>
      )
    }
  }

export default App