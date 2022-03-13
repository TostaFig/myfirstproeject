import React, {Component} from 'react'
import Table2 from './Table2'

class App2 extends React.Component {
    render() {     
        const characters = [
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
              name: 'Dennis1',
              job: 'Bartender1',
            },
          ]

        return (
        <div className="App2">
          <h1>Hello, React!2</h1>
            <div className="container">
                <Table2 characterData={characters} />
            </div>
        </div>
      )
    }
  }  

export default App2
