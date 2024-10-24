import { useState } from "react";

export type ProductStore = ProductState & ProductAction;

type ProductState = {
	products: Product[];
};

type ProductAction = {
	addProduct: (newProduct: Product) => void;
	updateProduct: (updatedProduct: Product) => void;
};

export const useProducts = (initialProducts: Product[]): ProductStore => {
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
