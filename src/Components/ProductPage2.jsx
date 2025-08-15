import React from "react";
import products2data from "../data/products2data";
import ProductCard from "./ProductCard";

const ProductPage2 = () => {
  return (
    <div className="p-4">
      {products2data.map((section, index) => {
        const hasProducts = section.products && section.products.length > 0;
        const hasTableData = section.tableData && section.tableData.length > 0;

        return (
          <div key={index} className="my-20 mb-20">
            {/* Heading & Description */}
            <div className="mb-4 flex flex-col items-center text-center">
              <h2 className="text-6xl font-bold mb-2">{section.heading}</h2>
              <p className="text-gray-600 mb-4 max-w-[750px]">{section.description}</p>
            </div>

            {/* Table - Black & White Chart Style */}
            {hasTableData && section.columns && (
              <div className="overflow-x-auto mb-6">
                <table className="w-[650px] mx-auto border border-black text-black">
                  <thead>
                    <tr className="bg-black text-white">
                      {section.columns.map((col, i) => (
                        <th
                          key={i}
                          className="px-4 py-2 border border-black text-left font-semibold"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.tableData.map((row, i) => (
                      <tr
                        key={i}
                        className="bg-white"
                      >
                        {section.columns.map((col, j) => (
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

            {/* Products */}
            {hasProducts && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage2;