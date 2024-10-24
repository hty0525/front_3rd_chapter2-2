import { useState } from "react";
import { useCombinedContext } from "../context/combinedContext";

export const useAddProduct = () => {
	const { addProduct } = useCombinedContext();
	const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
		name: "",
		price: 0,
		stock: 0,
		discounts: [],
	});

	function addNewProduct() {
		const { name, price, stock } = newProduct;
		if (name === "" || price === 0 || stock === 0) {
			return alert("모든 항목을 입력해주세요.");
		}
		addProduct({ ...newProduct, id: Date.now().toString() });
	}

	function changeNewProduct(
		key: keyof Omit<typeof newProduct, "discounts">,
		value: string | number
	) {
		if (key === "price" || key === "stock") {
			value = Number(value);
		}

		setNewProduct((prev) => ({
			...prev,
			[key]: value,
		}));
	}

	return { newProduct, setNewProduct, addNewProduct, changeNewProduct };
};
