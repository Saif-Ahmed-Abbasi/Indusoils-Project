import React from "react";
import { useParams, Link } from "react-router-dom";
import productsAndCategory from "../data/products2data";
import ProductCard from "../components/ProductCard";
import Header from "./Header";
import HeroSection from "./HeroSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "./ui/breadcrumb";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const categoryData = productsAndCategory[decodedCategory];

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb aria-label="breadcrumb" className="flex items-center py-2 px-4 rounded bg-gray-100">
        <BreadcrumbList className="flex space-x-2 text-lg font-medium">
          <BreadcrumbItem>
            <BreadcrumbLink href="/product" className="cursor-pointer hover:text-blue-600">
              Product
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-500" />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/category/${encodeURIComponent(decodedCategory)}`}
              className="cursor-pointer font-semibold hover:text-blue-600"
            >
              {categoryData?.heading || decodedCategory}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

              <HeroSection
              heading={categoryData?.heading || decodedCategory}
              backgroundImage="/images/category-page-banner.avif"
            />

      <div className="my-8 p-4 rounded container mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2 uppercase">
          {categoryData?.heading || decodedCategory}
        </h1>

        {/* Description */}
        {categoryData?.description && (
          <p className="text-gray-600 mb-6 w-[1200px]">{categoryData.description}</p>
        )}

        {/* Table for columns & tableData */}
       {categoryData?.columns && categoryData?.tableData?.length > 0 && (
  <div className="overflow-x-auto mb-6">
    <table className="border border-black mx-auto min-w-full">
      <thead>
        <tr className="bg-black text-white">
          {categoryData.columns.map((col, index) => (
            <th
              key={index}
              className="border border-black px-4 py-2 text-left"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {categoryData.tableData.map((row, i) => (
          <tr
            key={i}
            className={"bg-white"}
          >
            <td className="border border-black px-4 py-2">{row.Description}</td>
            <td className="border border-black px-4 py-2">{row.Method}</td>
            <td className="border border-black px-4 py-2">{row.Value}</td>
          </tr>
        ))} */}
        {categoryData.tableData.map((row, i) => (
                      <tr
                        key={i}
                        className="bg-white"
                      >
                        {categoryData.columns.map((col, j) => (
                          <td
                            key={j}
                            className="px-4 py-2 border border-black"
                          >
                            {row[col] ?? "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
      </tbody>
    </table>
  </div>
)}

        {/* Products Grid */}
        {categoryData?.products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mb-8">No products found in this category.</p>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
