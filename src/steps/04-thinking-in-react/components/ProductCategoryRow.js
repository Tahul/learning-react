import React from 'react'

export default ({ category }) => {
  return (
    <tr>
      <td className="text-xl bold" colSpan="2">
        {category}
      </td>
    </tr>
  )
}
