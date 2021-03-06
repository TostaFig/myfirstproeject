import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name2</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row,index) =>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    
    return (<tbody>{rows}</tbody>)
  }

class Table2 extends Component {
  render() {
    const {characterData} = this.props
    return (
      <table>
        <TableHeader></TableHeader>        
        <TableBody characterData={characterData} ></TableBody>
      </table>
    )
  }
}

export default Table2
