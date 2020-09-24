import React from 'react'

export default React.memo(({ category }) => {
  return (
    <tr>
      <td className="text-xl bold" colSpan="2">
        {category}
      </td>
    </tr>
  )
})
