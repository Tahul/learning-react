import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default ({ products, search, filter }) => {
  // Filter products w/ search parameters
  const filteredProducts = products.filter((item) => {
    if (filter && !item.stocked) {
      return false
    }

    if (search && search !== '') {
      return item.name.toLowerCase().includes(search.toLowerCase())
    }

    return true
  })

  // Init rows
  const rows = []

  // Get categories from produts list
  const categories = filteredProducts.reduce((prev, curr) => {
    if (!prev.includes(curr.category)) {
      return [...prev, curr.category]
    }

    return prev
  }, [])

  // Create rows table
  for (const category of categories) {
    // Add a ProductCategoryRow for a new category
    rows.push(<ProductCategoryRow category={category} key={category} />)

    // Loop through filtered products related to that category
    for (const product of filteredProducts.filter(
      (filteredProduct) => filteredProduct.category === category,
    )) {
      // Add the corresponding product row
      rows.push(<ProductRow product={product} key={product.name} />)
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th
            className="text-2xl bold"
            style={{ minWidth: '75px' }}
            colSpan="2"
          >
            Name
          </th>
          <th
            className="text-2xl bold"
            style={{ minWidth: '75px' }}
            colSpan="2"
          >
            Price
          </th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  )
}
