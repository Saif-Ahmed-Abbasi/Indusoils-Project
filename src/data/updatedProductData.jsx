import rawProducts from "./productdata"; // your original data

const updatedProductsAndCategory = {};

Object.entries(rawProducts).forEach(([category, categoryData]) => {
  const { description, products } = categoryData;

  updatedProductsAndCategory[category] = {
    description,
    products: products.map((product, index) => ({
      ...product,
      id: index,
      category, // attach category name inside each product
    })),
  };
});

export default updatedProductsAndCategory;
