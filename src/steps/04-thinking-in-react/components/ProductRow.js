import React from 'react'

export default ({ product }) => {
  return (
    <tr>
      <td colSpan="2">{product.name}</td>
      <td colSpan="2">{product.price}</td>
    </tr>
  )
}
