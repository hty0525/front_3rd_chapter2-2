import { useState } from "react";

export const useProducts = (initialProducts: Product[]) => {
	const [products, setProducts] = useState<Product[]>(initialProducts);

	function addProduct(newProduct: Product) {
		setProducts((prevProducts) => [...prevProducts, newProduct]);
	}

	function updateProduct(updatedProduct: Product) {
		setProducts((prevProducts) =>
			prevProducts.map((curProduct) =>
				curProduct.id === updatedProduct.id ? updatedProduct : curProduct
			)
		);
	}

	return {
		products,
		addProduct,
		updateProduct,
	};
};
