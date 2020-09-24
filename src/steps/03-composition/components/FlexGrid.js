import React from 'react'

export default ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap w-full p-16 border border-red-300 rounded-md">
      {children}
    </div>
  )
}
