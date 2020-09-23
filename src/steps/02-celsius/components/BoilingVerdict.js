import React from 'react'

export default ({ celsius }) => {
  return (
    <div className="px-4 py-2 font-bold text-white bg-blue-400 rounded-lg shadow-lg">
      {celsius >= 100 ? (
        <div>
          <span role="img" aria-labelledby="hot">
            🥵
          </span>
          &nbsp; L'eau bout
        </div>
      ) : (
        <div>
          <span role="img" aria-labelledby="water">
            💧
          </span>
          &nbsp; L'eau ne bout pas
        </div>
      )}
    </div>
  )
}
