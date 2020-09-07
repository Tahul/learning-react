import React from 'react'

export default ({ celsius }) => {
  if (celsius >= 100) {
    return (
      <div className="text-green-400">
        <span role="img" aria-labelledby="hot">
          🥵
        </span>
        &nbsp; L'eau bout
      </div>
    )
  }

  return (
    <div className="text-orange-400">
      <span role="img" aria-labelledby="water">
        💧
      </span>
      &nbsp; L'eau ne bout pas
    </div>
  )
}
