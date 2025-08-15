import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between w-full h-full mt-4 overflow-hidden">
            <div className="flex flex-col flex-grow">
                <div className="w-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-[90%] w-full object-cover mx-auto"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                    {product.description ? product.description.split('. ').slice(0, 1).join('. ') + '.' : "No description available."}
                </p>
                <p className="font-bold text-black mb-2">Rs. {product.price || "N/A"}</p>
            </div>
            <Link
                to={`/product/${encodeURIComponent(product.name)}`}
                className="bg-black text-white w-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 rounded-b-xl"
            >
                learn more <span className="text-lg">→</span>
            </Link>
        </div>
    );
};

export default ProductCard;
