import React from 'react'

export default ({ search, onSearchUpdate, filter, onFilterUpdate }) => {
  /**
   * Emit the value from the search input with the props callback
   * @param {*} event
   */
  const handleSearchUpdate = (event) => {
    onSearchUpdate(event.target.value)
  }

  /**
   * Emit the value from the filter checkbox with the props callback
   * @param {*} event
   */
  const handleFilterUpdate = (event) => {
    onFilterUpdate(event.target.checked)
  }

  return (
    <div className="p-4">
      <input
        className="px-2 py-1 border-2 border-blue-400 rounded-lg shadow-sm focus:outline-none"
        type="text"
        value={search}
        onChange={handleSearchUpdate}
        placeholder="Search..."
      />

      <div>
        <input
          className="mr-2"
          type="checkbox"
          checked={filter}
          onChange={handleFilterUpdate}
        />
        <label className="text-sm">Only show products in stock</label>
      </div>
    </div>
  )
}
