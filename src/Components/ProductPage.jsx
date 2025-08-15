import React from "react";
import { Link } from "react-router-dom";

// import required components
import HeroSection from "./HeroSection";

// import data files
import productsAndCategory from "../data/products2data";

const ProductCard = ({ product }) => (
  <>
  <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between w-full h-full overflow-hidden">
    <div className="flex flex-col mb-4 flex-grow">
      <div className="w-full">
        <img
          src={product.image}
          alt={product.name}
          className="h-[90%] w-full object-cover mx-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {product.description
          ? product.description.split(". ").slice(0, 1).join(". ") + "."
          : "No description available."}
      </p>
      <p className="font-bold text-black mb-2">Rs. {product.price || "N/A"}</p>
    </div>
    <Link
      to={`/product/${encodeURIComponent(product.category)}/${product.id}`}
      className="bg-black text-white w-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 rounded-b-xl"
    >
      Learn more <span className="text-lg">→</span>
    </Link>
  </div>
  </>
);

const ProductCategory = ({categoryKey, heading, products, description }) => (
  <div className="my-8 p-4 rounded container mx-auto">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-4xl font-bold uppercase">{heading}</h2>
      <Link
        to={`/category/${encodeURIComponent(categoryKey)}`}
        className="text-blue-500 hover:underline text-sm"
      >
        Explore {heading} Products →
      </Link>
    </div>
    {description && (
  <p className="text-gray-600 mb-6 w-[900px]">
    {description.length > 100
      ? `${description.slice(0, 200)}...`
      : description}
  </p>
)}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const ProductPage = () => (
  <div>
    {Object.entries(productsAndCategory).map(([category, data]) => (
      <ProductCategory
        key={category}
        heading={data.heading}
        products={data.products}
        categoryKey={category}
        description={data.description}
      />
    ))}
  </div>
);

export default ProductPage;
