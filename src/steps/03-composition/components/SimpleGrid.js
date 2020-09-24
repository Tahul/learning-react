import React from 'react'

export default ({ left, right }) => {
  return (
    <div className="flex flex-row flex-wrap">
      <div class="w-full md:w-1/2">{left}</div>

      <div class="w-full md:w-1/2">{right}</div>
    </div>
  )
}
