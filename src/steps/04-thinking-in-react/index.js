import React, { useState } from 'react'
import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar'

export default () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(false)
  const [products] = useState([
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
    },
    {
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Nexus 7',
    },
  ])

  /**
   * Update the search state
   * @param {*} search
   */
  const handleSearchUpdate = (search) => {
    setSearch(search)
  }

  /**
   * Update the filter state
   * @param {*} filter
   */
  const handleFilterUpdate = (filter) => {
    setFilter(filter)
  }

  return (
    <div className="p-4 border-2 border-blue-400 rounded-lg">
      <SearchBar
        search={search}
        filter={filter}
        onSearchUpdate={handleSearchUpdate}
        onFilterUpdate={handleFilterUpdate}
      />

      <ProductTable products={products} search={search} filter={filter} />
    </div>
  )
}
