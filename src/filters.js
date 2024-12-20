export const filterBySearchTerm = (searchTerm, product) => {
  const lowercasedTerm = searchTerm.toLowerCase();
  return (
    product.name.toLowerCase().includes(lowercasedTerm) ||
    product.description.toLowerCase().includes(lowercasedTerm)
  );
};

export const filterByColor = (selectedColors, product) => {
  return selectedColors.length === 0 || selectedColors.includes(product.color);
};

export const filterByPriceRange = (minPrice, maxPrice, product) => {
  const min = minPrice === "" ? 0 : Number(minPrice);
  const max = maxPrice === "" ? Infinity : Number(maxPrice);
  return product.price >= min && product.price <= max;
};
