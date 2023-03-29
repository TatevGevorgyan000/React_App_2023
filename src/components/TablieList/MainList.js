import React from 'react'
import PropTypes from 'prop-types'

export default function MainList({ data, handeleDelete }) {
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Ganre</th>
        <th>Stock</th>
        <th>Rate</th>
        <th>X</th>
      </tr>
      {data.map(elem => {
        return (
          <tr key={elem.id}>
            <td>{elem.name}</td>
            <td>{elem.type}</td>
            <td>{elem.stock}</td>
            <td>{elem.rate}</td>
            <td>
              <button onClick={() => handeleDelete(elem.id)}>delete</button>
            </td>
          </tr>
        )
      })}
    </table>
  )
}

MainList.propTypes ={ 
  handeleDelete: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    stock: PropTypes.number,
    rate: PropTypes.number
  }))
}