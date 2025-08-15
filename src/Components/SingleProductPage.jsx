import React from "react";
import { useParams, Link } from "react-router-dom";
import productsAndCategory from "../data/updatedProductData"; // Update with correct path
import Header from "./Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"; // Breadcrumb components

const SingleProductPage = () => {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);

    let currentProduct = null;
    let currentCategory = null;

    // Ensure products are an array before using `.find`
    for (const [category, categoryData] of Object.entries(productsAndCategory)) {
        const products = categoryData.products;  // Accessing the products array correctly
        if (Array.isArray(products)) {
            const match = products.find((p) => p.name === decodedName);
            if (match) {
                currentProduct = match;
                currentCategory = category;
                break;
            }
        } else {
            console.warn(`Expected an array for category: ${category}, but received:`, products);
        }
    }

    if (!currentProduct) {
        return <div className="text-center p-6 text-red-500">Product not found</div>;
    }

    // Get related products (excluding the current one)
    const relatedProducts = Array.isArray(productsAndCategory[currentCategory]?.products)
        ? productsAndCategory[currentCategory].products
            .filter((p) => p.name !== currentProduct.name)
            .slice(0, 4)
        : [];

    return (
        <>
            <Header />

            {/* Breadcrumbs */}
            <Breadcrumb aria-label="breadcrumb" className="flex items-center py-2 px-4 rounded bg-gray-100">
                <BreadcrumbList className="flex space-x-2 text-lg font-medium">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/product" className="cursor-pointer hover:text-blue-600">
                            product
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-500" />
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href={`/category/${encodeURIComponent(currentCategory)}`}
                            className="cursor-pointer hover:text-blue-600">
                            {currentCategory}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-500" />
                    {/* Wrap the last breadcrumb (Product) with BreadcrumbLink */}
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href={`/product/${encodeURIComponent(decodedName)}`}
                            className="cursor-pointer font-semibold hover:text-blue-600">
                            {decodedName}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Main Product Section */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-white shadow-md rounded-lg p-6 mb-10 grid md:grid-cols-2 gap-6 items-center">
                    <div>
                        <img
                            src={currentProduct.image}
                            alt={currentProduct.name}
                            className="w-full h-72 object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-blue-900 mb-3">{currentProduct.name}</h1>
                        <p className="text-gray-700 mb-4 whitespace-pre-line">{currentProduct.description}</p>
                        <p className="text-xl font-semibold text-black mb-4">
                            Price: Rs. {currentProduct.price || "N/A"}
                        </p>
                        <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedProducts.map((item) => (
                                <Link
                                    to={`/product/${encodeURIComponent(item.name)}`}
                                    key={item.name}  // Using unique name as the key for better performance
                                    className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition duration-200 flex flex-col items-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-32 object-contain mb-3"
                                    />
                                    <h3 className="text-sm font-medium text-center text-gray-900">{item.name}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleProductPage;
