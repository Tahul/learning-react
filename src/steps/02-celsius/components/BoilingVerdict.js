import React from 'react'

export default ({ celsius }) => {
  return (
    <div className="rounded-lg bg-blue-400 px-4 py-2 font-bold text-white shadow-lg">
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
