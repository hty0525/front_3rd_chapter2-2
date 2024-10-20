import { useState } from "react";

import { Product } from "../../types.ts";

export const useProducts = () => {
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

const initialProducts: Product[] = [
	{
		id: "p1",
		name: "상품1",
		price: 10000,
		stock: 20,
		discounts: [
			{ quantity: 10, rate: 0.1 },
			{ quantity: 20, rate: 0.2 },
		],
	},
	{
		id: "p2",
		name: "상품2",
		price: 20000,
		stock: 20,
		discounts: [{ quantity: 10, rate: 0.15 }],
	},
	{
		id: "p3",
		name: "상품3",
		price: 30000,
		stock: 20,
		discounts: [{ quantity: 10, rate: 0.2 }],
	},
];
